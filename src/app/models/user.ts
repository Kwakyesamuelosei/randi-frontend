export class IUser {
    token: string;
    user: {
        pk: string,
        username: string,
        email: string,
        first_name: string,
        last_name: string,
        phone: string,
        account_type: string,
        is_accredited: boolean,
        accreditation: boolean,
        accreditation_state: string
    };
}
