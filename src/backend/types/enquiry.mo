module {
  public type EnquiryId = Nat;

  public type Enquiry = {
    id : EnquiryId;
    name : Text;
    email : Text;
    phone : Text;
    company : Text;
    service : Text;
    message : Text;
    timestamp : Int;
  };

  public type EnquiryInput = {
    name : Text;
    email : Text;
    phone : Text;
    company : Text;
    service : Text;
    message : Text;
  };
};
