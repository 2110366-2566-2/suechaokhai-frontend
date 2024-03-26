import PropertyData from "@/models/PropertyData";
import UserData from "@/models/UserData";
import getTopProperty from "@/services/property/getTopProperty";
import getCurrentUser from "@/services/users/getCurrentUser";
import { useEffect, useState } from "react";
import Image from "next/image";
import getProperties from "@/services/property/getProperties";
import SmallPropertyCard from "../home-page/SmallPropertyCard";
import Link from "next/link";

export default function RelatedProperty({ street }: { street: string }) {
    const [start, setStart] = useState<number>(0);
    const [windowSize, setWindowSize] = useState<number>(3);
    const [propertiesId, setPropsId] = useState<PropertyData[]>([]);
    const [user, setUser] = useState<UserData | undefined>();

    useEffect(() => {
        async function getUser() {
            try {
                const data = await getCurrentUser();
                setUser(data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }
        getUser();
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            const res = await getTopProperty();
            const property2: PropertyData[] = [];
            if (res) {
                res.forEach((item: PropertyData) => {
                    property2.push(item);
                });
                setPropsId(property2);
            }
        };
        fetchData();
    }, []);

    useEffect(() => {
        function handleResize() {
            const newStop = calculateStopValue();
            setWindowSize(newStop);
        }

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    function calculateStopValue() {
        if (window.innerWidth > 1536) {
            return 3;
        } else if (window.innerWidth > 1024) {
            return 2;
        } else {
            return 1;
        }
    }

    function goNext() {
        if (start + windowSize < 10) {
            setStart(start + 1);
        }
    }

    function goBack() {
        if (start > 0) {
            setStart(start - 1);
        }
    }

    return (
        <div className="flex w-full flex-col gap-y-10">
            <div className="flex flex-col gap-y-5">
                <div className="text-3xl font-bold">
                    Other Listings
                </div>
            </div>

            {propertiesId ? (
                <div className="flex flex-row justify-around gap-x-4">
                    {start > 0 ? (
                        <Image
                            src="/img/home-page/back.svg"
                            alt="next"
                            width={60}
                            height={60}
                            onClick={goBack}
                            className="cursor-pointer"
                        />
                    ) : (
                        <div className="w-15 h-15 pr-[60px]"></div>
                    )}

                    {propertiesId
                        .slice(start, start + windowSize)
                        .map((item: PropertyData) => (
                            <Link
                                href={"/property/" + item.property_id}
                                key={item.property_id}
                            >
                                <SmallPropertyCard
                                    property={item}
                                    key={item.property_id}
                                    user={user}
                                />
                            </Link>
                        ))}

                    {start + windowSize < 10 ? (
                        <Image
                            src="/img/home-page/next.svg"
                            alt="next"
                            width={60}
                            height={60}
                            onClick={goNext}
                            className="cursor-pointer"
                        />
                    ) : (
                        <div className="w-15 h-15 pl-[60px]"></div>
                    )}
                </div>
            ) : (
                <div>Loading...</div>
            )}
        </div>
    );
}