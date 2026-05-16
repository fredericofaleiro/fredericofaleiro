// Curated Unsplash dental/healthcare imagery (real photos, hot-linked).
const u = (id: string, w = 1200) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const serviceImages: Record<string, string> = {
  "Dental Cleanings & Exams": u("photo-1606811841689-23dfddce3e95"),
  "For the Kids!": u("photo-1588776814546-1ffcf47267a5"),
  "CEREC Same-Day Crowns": u("photo-1609840114035-3c981b782dfe"),
  "Sleep Apnea": u("photo-1541199249251-f713e6145474"),
  "Dental Implants": u("photo-1629909613654-28e377c37b09"),
  "Dental Crowns and Bridges": u("photo-1598256989800-fe5f95da9787"),
  "Invisalign": u("photo-1606265752439-1f18c8859f9b"),
  "Porcelain Veneers": u("photo-1581585099522-f6ac2efe6217"),
  "Dentures": u("photo-1588776844730-bfb6c2a85d0a"),
  "Common Dental Emergencies": u("photo-1576091160550-2173dba999ef"),
  "Teeth Whitening": u("photo-1606811971618-4486d14f3f99"),
  "Tooth Bonding": u("photo-1622253692010-333f2da6031d"),
  "Sleep / Sedation Dentistry": u("photo-1631815589968-fdb09a223b1e"),
  "Root Canal Treatment": u("photo-1588776814546-1ffcf47267a5"),
};

export const officeImages = {
  waiting: u("photo-1629909613654-28e377c37b09", 1400),
  reception: u("photo-1631217868264-e5b90bb7e133", 1400),
  treatment: u("photo-1606811841689-23dfddce3e95", 1400),
  equipment: u("photo-1609840114035-3c981b782dfe", 1400),
  hallway: u("photo-1631815587646-b85a1bb027e1", 1400),
  exterior: u("photo-1576091160399-112ba8d25d1d", 1400),
};

export const doctorImages = [
  u("photo-1612531386530-97286d97c2d2", 800),
  u("photo-1559839734-2b71ea197ec2", 800),
  u("photo-1622253692010-333f2da6031d", 800),
  u("photo-1537368910025-700350fe46c7", 800),
];

export const teamImages = [
  u("photo-1594824476967-48c8b964273f", 800),
  u("photo-1551836022-d5d88e9218df", 800),
  u("photo-1582750433449-648ed127bb54", 800),
  u("photo-1573496359142-b8d87734a5a2", 800),
  u("photo-1559839734-2b71ea197ec2", 800),
  u("photo-1612531386530-97286d97c2d2", 800),
];

export const communityImages = [
  u("photo-1559027615-cd4628902d4a", 1200),
  u("photo-1532629345422-7515f3d16bb6", 1200),
  u("photo-1469571486292-0ba58a3f068b", 1200),
  u("photo-1488521787991-ed7bbaae773c", 1200),
];
