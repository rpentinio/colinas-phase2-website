using System;
using System.Collections.Generic;

namespace ColinasPhase2Website.Models
{
    public partial class Residents
    {
        public int ResidentId { get; set; }
        public string LastName { get; set; }
        public string FirstName { get; set; }
        public string Nickname { get; set; }
        public string Email { get; set; }
        public string PhoneNumber { get; set; }
        public string BlockLot { get; set; }
        public string StreetName { get; set; }
        public string Phase { get; set; }
        public string ResidentStatus { get; set; }
    }
}
