/** Nov 13, 2026 WNC Exchange Summit Committee — public About roster. */

export type CommitteePerson = {
  org: string;
  name: string;
  email: string;
};

export type CommitteeGroup = {
  id: string;
  title: string;
  people: CommitteePerson[];
};

export const summitCommittee = {
  title: "Nov 13, 2026 WNC Exchange Summit Committee",
  chair: {
    org: "Chair",
    name: "William Sederburg",
    email: "wsederburg@gmail.com",
  } satisfies CommitteePerson,
  groups: [
    {
      id: "host",
      title: "Host",
      people: [
        { org: "Mars Hill University", name: "Chris Cain", email: "ccain@mhu.edu" },
      ],
    },
    {
      id: "presenters",
      title: "Presenters",
      people: [
        { org: "Western Carolina University", name: "Ian Selig", email: "iselig@email.wcu.edu" },
        { org: "Haywood Community College", name: "Tim Scapin", email: "tpscapin@haywood.edu" },
      ],
    },
    {
      id: "sponsors",
      title: "Sponsoring organizations",
      people: [
        { org: "Western Carolina University", name: "Jonathan Wade", email: "jdwade@email.wcu.edu" },
        {
          org: "Warren Wilson College",
          name: "Michael Mars Landis",
          email: "mlandis@warren-wilson.edu",
        },
        {
          org: "Blue Ridge Community College",
          name: "Steven Young",
          email: "sd_young@blueridge.edu",
        },
        { org: "Brevard College", name: "Jim Brooks", email: "brooksjp@brevard.edu" },
        { org: "A.B. Tech", name: "Dana Moore", email: "danabmoore@abtech.edu" },
        { org: "UNC Asheville", name: "Eden Bloss", email: "ebloss@unca.edu" },
        { org: "UNC Asheville", name: "Nana Harrison", email: "nharris5@unca.edu" },
        { org: "Montreat College", name: "Thomas Hill", email: "thomas.hill@montreat.edu" },
        {
          org: "Buncombe County Schools",
          name: "Lila Morel",
          email: "lila.morel@bcsemail.org",
        },
      ],
    },
    {
      id: "interns",
      title: "Interns",
      people: [
        { org: "UNCA Computer Science", name: "Ellie Miller", email: "emille16@unca.edu" },
        { org: "UNCA Marketing", name: "Leigha Travis", email: "ltravis1@unca.edu" },
        {
          org: "BRCC Computer Science",
          name: "Megan Coyle",
          email: "m.coyle@blueridge.edu",
        },
      ],
    },
    {
      id: "land-of-sky",
      title: "Land of Sky Workforce Development Board",
      people: [
        { org: "Land of Sky", name: "Mark Sternal", email: "mark@landofsky.org" },
        { org: "Land of Sky", name: "Riley Edmundson", email: "riley@landofsky.org" },
      ],
    },
  ] satisfies CommitteeGroup[],
};
