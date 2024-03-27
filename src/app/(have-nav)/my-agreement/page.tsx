'use client';
import { useEffect, useRef, useState } from "react"
import Image from "next/image";
import AgreementList from "@/components/my-agreement/AgreementList";
import ToggleSwitch from "@/components/my-appointment/ToggleSwitch";
import AgreementData from "@/models/AgreementData";
import getUserAgreement from "@/services/agreement/getUserAgreement";
import Dropdown, { IDropdownOption } from "@/components/my-agreement/Dropdown";
import getUserProperties from "@/services/agreement/getUserProperties";
import getUsersFromChat from "@/services/agreement/getUsersFromChat";

export default function MyAgreement() {

    const [ownerAgreementData, setOwnerAgreementData] = useState<AgreementData[]>([]);
    const [dwellerAgreementData, setDwellerAgreementData] = useState<AgreementData[]>([]);
    const [ownerTotal, setOwnerTotal] = useState<number>(0);
    const [dwellerTotal, setDwellerTotal] = useState<number>(0);
    const [finishFetching, setFinishFetching] = useState<boolean>(false);
    const [properties, setProperties] = useState<string[]>([]);
    const [dwellers, setDwellers] = useState<string[]>([]);
    const [propertiesOptions, setPropertiesOptions] = useState<IDropdownOption[]>([]);
    const [dwellersOptions, setDwellersOptions] = useState<IDropdownOption[]>([]);

    const [selectedOption, setSelectedOption] = useState<string | number>();

    const [selectOn, setSelectOn] = useState(0);
    const [showFilter, setShowFilter] = useState(false);
    const [isMakingAgreement, setMakingAgreement] = useState<boolean>(false);
    const [selectedStatus, setSelectedStatus] = useState<Array<string>>([
        "Archive", 
        "Await Deposit", 
        "Await Rent", 
        "Cancelled", 
        "Overdue", 
        "Renting"
    ]);
    
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                setShowFilter(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [ref]);

    useEffect(() => {
        const fetchData = async () => {
          const data = await getUserAgreement();
          console.log(data);
          setOwnerAgreementData(data.owner_agreements);
          if (ownerAgreementData !== null) {
            setOwnerTotal(data.owner_agreements.length);
          }
          setDwellerAgreementData(data.dweller_agreements);
          if (dwellerAgreementData !== null) {
            setDwellerTotal(data.dweller_agreements.length);
          }
        };
        fetchData();
        setFinishFetching(true);
      }, []);

    // useEffect(() => {
    //     console.log(total);
    //     console.log(agreementData);
    //     const props: string[] = [];
    //     agreementData.map((agmt) => {
    //         // props.push(agmt.property.property_name);
    //         props.push("1");
    //     })
    //     setProperties(props);
    // }, [agreementData])

    useEffect(() => {
      const getProperty = async () => {
        const allProperties = await getUserProperties();
        console.log(allProperties)

        let label: string | number;
        let labelValue: string | number;
        const optionArray: IDropdownOption[] = [];

        (allProperties.properties).map((prop) => {
            label = prop.property_name;
            labelValue = prop.property_id;
            let option = {label, labelValue};
            optionArray.push(option);
        })

        setPropertiesOptions(optionArray);
      }

      getProperty();

      //   const props: string[] = [];
      //   (allProperties.properties).map((prop) => {
      //     props.push(prop.property_name)
      //   })
      //   setProperties(props)
      // }
      // getProperty();
    }, [])

    // useEffect(() => {
    //     let label: string | number;
    //     let labelValue: string | number;
    //     const optionArray: IDropdownOption[] = [];
    //     properties.map((prop) => {
    //         label = prop;
    //         labelValue = prop;
    //         let option = {label, labelValue};
    //         optionArray.push(option);
    //     })
    //     setPropertiesOptions(optionArray);
    // }, [properties])

    useEffect(() => {
      const getDweller = async () => {
        const allDwellers = await getUsersFromChat();
        console.log(allDwellers)

        let label: string | number;
        let labelValue: string | number;
        const optionArray: IDropdownOption[] = [];

        allDwellers.map((dwlr) => {
            label = `${dwlr.first_name} ${dwlr.last_name}`;
            labelValue = dwlr.user_id;
            let option = {label, labelValue};
            optionArray.push(option);
        })

        setDwellersOptions(optionArray);

        // const dwlrs: string[] = [];
        // allDwellers.map((dwlr) => {
        //   dwlrs.push(`${dwlr.first_name} ${dwlr.last_name}`)
        // })
        // setDwellers(dwlrs)
      }
      getDweller();
    }, [])


    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedOption(event.target.value);
    };

    const handleCheckboxChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        console.log('Checkbox value:', event.target.value);
        // Handle checkbox change logic here
    };

    const getDate = (dateString: string) => {
        const date = new Date(dateString);
    
        const day = date.getDate();
        const month = date.getMonth();
        const year = date.getFullYear();
    
        const months = [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ];
    
        return `${day} ${months[month - 1]} ${year}`;
      };
    
    const getTime = (dateString: string) => {
        const date = new Date(dateString);

        const hours = String(date.getHours()).padStart(2, "0");
        const minutes = String(date.getMinutes()).padStart(2, "0");
        return `${hours}:${minutes}`;
    };
    

    return (
        <div className="mx-auto mt-8 h-full w-[80%]">
          <div className="flex flex-row">
            <div className="mr-auto text-5xl font-bold">My Agreement</div>
            <div className="pt-1">
              <ToggleSwitch
                label1="Dweller"
                label2="Owner"
                selectOn={selectOn}
                setSelectOn={setSelectOn}
              />
            </div>
          </div>
          <div className="w-full mx-auto my-5 flex flex-row items-center">
            <div className="text-xl font-bold">Sort By</div>
            <div className="ml-1">
              <select
                className="block w-full rounded-md text-xl font-semibold text-ci-blue focus-within:border-none hover:cursor-pointer focus:border-none"
                value={selectedOption}
                onChange={handleChange}
              >
                <option
                  className="hover:bg-ci-light-gray hover:shadow-inner"
                  value="latest"
                >
                  Latest Agreement First
                </option>
                <option
                  className="hover:bg-ci-light-gray hover:shadow-inner"
                  value="oldest"
                >
                  Oldest Agreement First
                </option>
              </select>
            </div>
            <div className="relative ml-2 mr-auto flex flex-row place-items-start text-xl font-bold">
              <div
                className="flex flex-row hover:cursor-pointer"
                onClick={() => {
                  setShowFilter(!showFilter);
                }}
              >
                Filter Status Type
                <Image
                  className="mx-1 hover:cursor-pointer"
                  src="img/my-appointment/filter.svg"
                  alt="filter"
                  width={25}
                  height={25}
                />
              </div>
    
              {showFilter ? (
                <div
                  ref={ref}
                  className="absolute -right-40 top-full z-40 flex w-full flex-col items-center border border-black bg-white"
                >
                  {selectedStatus.map((selected) => (
                    <div className="mx-auto flex h-[50px] w-full flex-row bg-slate-200 p-3">
                      <input
                        className="w-1/5 accent-ci-light-gray"
                        type="checkbox"
                        value={selected}
                        onChange={handleCheckboxChange}
                        checked={true}
                      />
                      <div className="w-4/5">{selected}</div>
                    </div>
                  ))}
                </div>
              ) : null}
            </div>
            <div className="flex w-[25%] justify-end">
                <button 
                    className="w-full bg-ci-blue text-white rounded-lg font-medium text-2xl text-center py-3 hover:shadow-blue-950 hover:shadow-inner"
                    onClick={() => {
                        setMakingAgreement(true);
                    }}
                >
                    Make Agreement
                </button>
            </div>
            {isMakingAgreement ? (
                <div className="fixed left-[0] top-[0] z-40 flex h-[100vh] w-[100%] flex-col items-center justify-center bg-black bg-opacity-20">
                    <div className="relative flex flex-col rounded-2xl bg-white p-[32px] items-center w-1/2 h-4/5 justify-around">
                        <div className="text-4xl font-bold">
                            Make Agreement
                        </div>
                        <div className="flex flex-row w-full justify-center mx-auto">
                            <div className="flex flex-col w-[40%] mx-auto">
                                <div className="text-2xl font-medium">
                                    Select your property
                                </div>
                                <div className="">
                                    <Dropdown 
                                        name="Property" options={propertiesOptions} required={true} placeHolder="Select Property" type="arrow-down" selectedItem={selectedOption} setSelectedItem={setSelectedOption}
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col w-[40%] mx-auto">
                                <div className="text-2xl font-medium">
                                    Select dweller
                                </div>
                                <div className="">
                                    <Dropdown 
                                        name="Dweller" options={dwellersOptions} required={true} placeHolder="Select Dweller" 
                                        type="arrow-down" selectedItem={selectedOption} setSelectedItem={setSelectedOption}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : null}
          </div>
    
          <div className="h-[80px] rounded-t-3xl bg-ci-dark-blue text-2xl font-semibold text-white">
            <div className="mx-auto my-auto flex h-full w-[90%] flex-row">
              <div className="my-auto ml-2 w-[40%]">Property</div>
              <div className="mx-[80px] my-auto">Date - Time</div>
              <div className="mx-[80px] my-auto">Status</div>
            </div>
          </div>
          {finishFetching ? (
            <div>
              {selectOn % 2 == 0 ? (
                <div>
                  {dwellerTotal == 0 ? (
                    <div className="mx-72 mt-8 flex h-1/2 flex-col items-center justify-around">
                      <div className="large-text text-center font-bold">
                        Empty agreement listing
                      </div>
          
                      <Image
                        src="/img/my-agreement/handshake.svg"
                        alt="home"
                        width={100}
                        height={100}
                      />
                      
                      <div className="m-1 text-center text-2xl">
                        Your agreement is empty.
                      </div>
                    </div>
                  ) : (
                    <div>
                        {dwellerAgreementData.map((agmt) => {
                      return (
                        <AgreementList
                          agreementId={agmt.agreement_id}
                          propertyImgSrc={
                            agmt.property.property_images.length === 0
                            ? "/img/my-appointment/mhadaeng.png"
                            : agmt.property.property_images[0].image_url
                          }
                          propertyName={agmt.property.property_name}
                          propertySubName={
                            agmt.property.property_type.charAt(0) +
                            agmt.property.property_type.toLowerCase().slice(1)
                          }
                          ownerImgSrc={agmt.owner.owner_profile_image_url}
                          ownerName={
                            agmt.owner.owner_first_name + " " + agmt.owner.owner_last_name
                          }
                          date={getDate(agmt.agreement_date)}
                          time={getTime(agmt.agreement_date)}
                          status={
                            agmt.status.charAt(0) + agmt.status.toLowerCase().slice(1)
                          }
                        />      
                      );
                    })}
                    </div>
                  )}
                    
                </div>
              ) : (
                <div>
                  {ownerTotal == 0 ? (
                    <div className="mx-72 mt-8 flex h-1/2 flex-col items-center justify-around">
                      <div className="large-text text-center font-bold">
                        Empty agreement listing
                      </div>
          
                      <Image
                        src="/img/my-agreement/handshake.svg"
                        alt="home"
                        width={100}
                        height={100}
                      />
                      
                      <div className="m-1 text-center text-2xl">
                        Your agreement is empty.
                      </div>
                    </div>
                  ) : (
                    <div>
                        {ownerAgreementData.map((agmt) => {
                      return (
                        <AgreementList
                          agreementId={agmt.agreement_id}
                          propertyImgSrc={
                            agmt.property.property_images.length === 0
                            ? "/img/my-appointment/mhadaeng.png"
                            : agmt.property.property_images[0].image_url
                          }
                          propertyName={agmt.property.property_name}
                          propertySubName={
                            agmt.property.property_type.charAt(0) +
                            agmt.property.property_type.toLowerCase().slice(1)
                          }
                          ownerImgSrc={agmt.owner.owner_profile_image_url}
                          ownerName={
                            agmt.owner.owner_first_name + " " + agmt.owner.owner_last_name
                          }
                          date={getDate(agmt.agreement_date)}
                          time={getTime(agmt.agreement_date)}
                          status={
                            agmt.status.charAt(0) + agmt.status.toLowerCase().slice(1)
                          }
                        />      
                      );
                    })}
                    </div>
                  )}
                    
                </div>
              )}

              
              
            </div>
          ) : null}
    
          <div className="mx-auto flex h-20 w-full place-items-center justify-center text-2xl font-medium">
            {selectOn % 2 == 0 ? (
              <div>
                {dwellerTotal} lists
              </div>
            ): (
              <div>
                {ownerTotal} lists
              </div>
            )
            }
            
          </div>
        </div>
      );
    }