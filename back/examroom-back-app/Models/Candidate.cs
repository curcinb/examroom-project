using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace examroom_back_app.Models
{
    public class Candidate
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string EmailId { get; set; }
        public string PhoneNumber { get; set; }
        public string AddressLine1 { get; set; }
        public string AddressLine2 { get; set; }

        public bool Active { get; set; }
    }
}