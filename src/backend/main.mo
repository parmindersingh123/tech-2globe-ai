import List "mo:core/List";
import Types "types/enquiry";
import EnquiryApi "mixins/enquiry-api";

actor {
  let enquiries = List.empty<Types.Enquiry>();

  include EnquiryApi(enquiries);
};
