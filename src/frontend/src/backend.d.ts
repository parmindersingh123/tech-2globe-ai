import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface EnquiryInput {
    service: string;
    name: string;
    email: string;
    company: string;
    message: string;
    phone: string;
}
export interface Enquiry {
    id: EnquiryId;
    service: string;
    name: string;
    email: string;
    company: string;
    message: string;
    timestamp: bigint;
    phone: string;
}
export type EnquiryId = bigint;
export interface backendInterface {
    listEnquiries(): Promise<Array<Enquiry>>;
    submitEnquiry(input: EnquiryInput): Promise<EnquiryId>;
}
