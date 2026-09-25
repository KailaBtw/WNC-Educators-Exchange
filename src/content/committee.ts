/** Nov 13, 2026 WNC Exchange Summit Committee — public About roster. */

export type CommitteePerson = {
  org: string;
  name: string;
  email: string;
  /** Local portrait under /public, when we found a usable public headshot. */
  image?: string;
  profileUrl?: string;
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
    image: "/images/team/bill.jpg",
  } satisfies CommitteePerson,
  groups: [
    {
      id: "host",
      title: "Host",
      people: [
        {
          org: "Mars Hill University",
          name: "Chris Cain",
          email: "ccain@mhu.edu",
          image: "/images/team/chris-cain.jpg",
        },
      ],
    },
    {
      id: "presenters",
      title: "Presenters",
      people: [
        {
          org: "Western Carolina University",
          name: "Ian Selig",
          email: "iselig@email.wcu.edu",
          image: "/images/team/Ian_s.jpg",
        },
        {
          org: "Haywood Community College",
          name: "Tim Scapin",
          email: "tpscapin@haywood.edu",
          image: "/images/team/tim_scappin.jpg",
        },
      ],
    },
    {
      id: "sponsors",
      title: "Sponsoring organizations",
      people: [
        {
          org: "Western Carolina University",
          name: "Jonathan Wade",
          email: "jdwade@email.wcu.edu",
          image: "/images/team/jonathan-wade.jpg",
        },
        {
          org: "Warren Wilson College",
          name: "Michael Mars Landis",
          email: "mlandis@warren-wilson.edu",
          image: "/images/team/michael-mars-landis.jpg",
        },
        {
          org: "Blue Ridge Community College",
          name: "Steven Young",
          email: "sd_young@blueridge.edu",
          profileUrl:
            "https://blueridge-2023-2024.catalog.prod.coursedog.com/board-faculty-staff/listing",
          image: "/images/team/steve.jpg",
        },
        {
          org: "Brevard College",
          name: "Jim Brooks",
          email: "brooksjp@brevard.edu",
          image: "/images/team/jim_b.jpg",
        },
        {
          org: "A.B. Tech",
          name: "Dana Moore",
          email: "danabmoore@abtech.edu",
          image: "/images/team/dana.jpg",
        },
        {
          org: "UNC Asheville",
          name: "Eden Bloss",
          email: "ebloss@unca.edu",
          image: "/images/team/eden-bloss.jpg",
        },
        {
          org: "UNC Asheville",
          name: "Nana Harrison",
          email: "nharris5@unca.edu",
          image: "/images/team/nana-harrison.jpg",
        },
        {
          org: "Montreat College",
          name: "Thomas Hill",
          email: "thomas.hill@montreat.edu",
          image: "/images/team/thomas-hill.jpg",
        },
        {
          org: "Buncombe County Schools",
          name: "Lila Morel",
          email: "lila.morel@bcsemail.org",
          image: "/images/team/lila.jpg",
        },
      ],
    },
    {
      id: "interns",
      title: "Interns",
      people: [
        {
          org: "UNCA Computer Science",
          name: "Ellie Lagrave",
          email: "emille16@unca.edu",
          image: "/images/team/ellie.jpg",
        },
        {
          org: "UNCA Marketing",
          name: "Leigha Travis",
          email: "ltravis1@unca.edu",
          profileUrl:
            "https://uncabulldogs.com/sports/womens-swimming-and-diving/roster/leigha-travis/5337",
          image: "/images/team/leigha-travis.jpg",
        },
        {
          org: "BRCC Computer Science",
          name: "Megan Coyle",
          email: "m.coyle@blueridge.edu",
          profileUrl:
            "https://www.blueridge.edu/2024/07/22/new-artificial-intelligence-program-creates-opportunities-for-students/",
          image: "/images/team/megan-coyle.jpg",
        },
      ],
    },
    {
      id: "land-of-sky",
      title: "Land of Sky Workforce Development Board",
      people: [
        {
          org: "Land of Sky",
          name: "Mark Sternal",
          email: "mark@landofsky.org",
          image: "/images/team/mark_steinel.jpg",
        },
        {
          org: "Land of Sky",
          name: "Riley Edmundson",
          email: "riley@landofsky.org",
          image: "/images/team/riley-edmundson.jpg",
        },
      ],
    },
  ] satisfies CommitteeGroup[],
};
