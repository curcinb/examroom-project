using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace examroom_back_app.Models
{
    public class FormAction
    {
        public int Id { get; set; }
        public int CandidateId { get; set; }
        public int FormId { get; set; }
        public string Actio { get; set; }
        public DateTime ActionOn { get; set; }
    }
}