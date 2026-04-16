import Types "../types/enquiry";
import List "mo:core/List";

module {
  public type Enquiry = Types.Enquiry;
  public type EnquiryInput = Types.EnquiryInput;
  public type EnquiryId = Types.EnquiryId;

  /// Submit a new enquiry, returning the generated id.
  public func submit(
    enquiries : List.List<Enquiry>,
    nextId : Nat,
    input : EnquiryInput,
    timestamp : Int,
  ) : EnquiryId {
    let enquiry : Enquiry = {
      id = nextId;
      name = input.name;
      email = input.email;
      phone = input.phone;
      company = input.company;
      service = input.service;
      message = input.message;
      timestamp = timestamp;
    };
    enquiries.add(enquiry);
    nextId;
  };

  /// Return all stored enquiries as an immutable array.
  public func listAll(enquiries : List.List<Enquiry>) : [Enquiry] {
    enquiries.toArray();
  };
};
