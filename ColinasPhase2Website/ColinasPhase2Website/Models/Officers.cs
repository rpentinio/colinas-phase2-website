using System;
using System.Collections.Generic;

namespace ColinasPhase2Website.Models
{
    public partial class Officers
    {
        public int OfficerId { get; set; }
        public int? ResidentId { get; set; }
        public string Position { get; set; }

        public virtual Residents Resident { get; set; }
    }
}
