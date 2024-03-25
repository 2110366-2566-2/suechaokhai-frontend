interface property {
    property_id: string;
}

interface owner {
    owner_user_id: string;
}

interface dweller {
    dweller_user_id: string;
}

export default interface AgreementData {
    agreement_id: string;
    property: property;
    owner: owner;
    dweller: dweller;
    agreement_date: string;
}