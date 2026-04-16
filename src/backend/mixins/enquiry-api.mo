import Types "../types/enquiry";
import EnquiryLib "../lib/enquiry";
import List "mo:core/List";
import Time "mo:core/Time";

mixin (enquiries : List.List<Types.Enquiry>) {

  /// Submit an enquiry form. Returns the generated enquiry id.
  public func submitEnquiry(input : Types.EnquiryInput) : async Types.EnquiryId {
    let nextId = enquiries.size();
    EnquiryLib.submit(enquiries, nextId, input, Time.now());
  };

  /// List all submitted enquiries (admin use).
  public query func listEnquiries() : async [Types.Enquiry] {
    EnquiryLib.listAll(enquiries);
  };
};
