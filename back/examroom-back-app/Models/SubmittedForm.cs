using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace examroom_back_app.Models
{
    public class SubmittedForm
    {
        public int Id { get; set; }
        public string CandidateName { get; set; }
        public string EmailId { get; set; }
        public string PhoneNumber { get; set; }
        public int IdForm { get; set; }
        public string FormName { get; set; }
        public string FormStatus { get; set; }

    }
}