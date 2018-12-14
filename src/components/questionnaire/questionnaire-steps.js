import SectionIntro from './steps/shared/intro'
import About from './steps/about/index'
import Occupation from './steps/occupation/index'
import OccupationPlan from './steps/occupation/occupation-plan'
import PersonalInterests from './steps/hobbies/index'
import PersonalInterestsPlan from './steps/hobbies/personal-interests-plan'
import Relationships from './steps/relationships/index'
import RelationshipsPlan from './steps/relationships/relationships-plan'
import Health from './steps/health/index'
import HealthPlan from './steps/health/health-plan'
import Community from './steps/community/index'
import Moonshot from './steps/moonshot/index'
import Email from './steps/final/index'

const questionnaireSteps = [
  {
    id: `FINAL`,
    data: {
      component: Email,
      meta: {
        sectionTitle: `Submit`,
        question: `Last step!`,
        subquestion: `Enter the email that you'd like to send your letter to. You'll receive it 365 days from today.`,
      },
    },
  },
  {
    id: `ABOUT`,
    data: {
      component: About,
      meta: {
        sectionTitle: `About`,
        question: `My name is...`,
      },
    },
  },
  {
    id: `INTRO_OCCUPATION`,
    data: {
      component: SectionIntro,
      meta: {
        sectionTitle: `Career/Work`,
        question: `Let's start with my career.`,
      },
      introProps: {
        text: `Nunc ultrices, orci eu dictum sollicitudin, enim nisl semper nibh,
        egestas bibendum massa est laoreet orci. Pellentesque sagittis ex
        sapien, nec iaculis orci sollicitudin sed. Vestibulum ante ipsum primis
        in faucibus orci luctus et ultrices posuere cubilia Curae; Pellentesque
        habitant morbi tristique senectus et netus et malesuada fames ac turpis
        egestas. Cras volutpat nisi et bibendum viverra.`,
      },
    },
  },
  {
    id: `OCCUPATION_INFO`,
    data: {
      component: Occupation,
      meta: {
        sectionTitle: `Career/Work`,
        question: `I am currently a`,
      },
    },
  },
  {
    id: `OCCUPATION_PLAN`,
    data: {
      component: OccupationPlan,
      meta: {
        sectionTitle: `Career/Work`,
        question: `Where I would like to be within this next year`,
        subquestion: `What are some things you want to see change with your work and what actions will you take to take to get there?`,
      },
    },
  },
  {
    id: 'INTRO_PERSONAL_INTERESTS',
    data: {
      component: SectionIntro,
      meta: {
        sectionTitle: 'Personal Interests',
        question: `Easy! Let's move on to personal interests.`,
      },
      introProps: {
        text: `Nunc ultrices, orci eu dictum sollicitudin, enim nisl semper nibh,
        egestas bibendum massa est laoreet orci. Pellentesque sagittis ex
        sapien, nec iaculis orci sollicitudin sed. Vestibulum ante ipsum primis
        in faucibus orci luctus et ultrices posuere cubilia Curae; Pellentesque
        habitant morbi tristique senectus et netus et malesuada fames ac turpis
        egestas. Cras volutpat nisi et bibendum viverra.`,
      },
    },
  },
  {
    id: `PERSONAL_INTERESTS`,
    data: {
      component: PersonalInterests,
      meta: {
        sectionTitle: `Personal Interests`,
        question: `Things that interest me.`,
      },
    },
  },
  {
    id: `PERSONAL_INTERESTS_PLAN`,
    data: {
      component: PersonalInterestsPlan,
      meta: {
        sectionTitle: `Personal Interests`,
        question: `How I plan on pursuing and being consistent with these interests.`,
      },
    },
  },
  {
    id: `INTRO_RELATIONSHIPS`,
    data: {
      component: SectionIntro,
      meta: {
        sectionTitle: `Relationships`,
        question: `Let's move onto improving relationships.`,
      },
      introProps: {
        text: `Nunc ultrices, orci eu dictum sollicitudin, enim nisl semper nibh,
        egestas bibendum massa est laoreet orci. Pellentesque sagittis ex
        sapien, nec iaculis orci sollicitudin sed. Vestibulum ante ipsum primis
        in faucibus orci luctus et ultrices posuere cubilia Curae; Pellentesque
        habitant morbi tristique senectus et netus et malesuada fames ac turpis
        egestas. Cras volutpat nisi et bibendum viverra.`,
      },
    },
  },
  {
    id: `RELATIONSHIPS`,
    data: {
      component: Relationships,
      meta: {
        sectionTitle: `Relationships`,
        question: `How I would rate my interpersonal relationship skills.`,
      },
    },
  },
  {
    id: `RELATIONSHIPS_PLAN`,
    data: {
      component: RelationshipsPlan,
      meta: {
        sectionTitle: `Relationships`,
        question: `How I will improve my relationships with others.`,
        subquestion: `Think actionable and reasonable steps that you will take.`,
      },
    },
  },
  {
    id: `INTRO_HEALTH`,
    data: {
      component: SectionIntro,
      meta: {
        sectionTitle: `Health`,
        question: `Almost done! Let's move onto our health.`,
      },
      introProps: {
        text: `Nunc ultrices, orci eu dictum sollicitudin, enim nisl semper nibh,
        egestas bibendum massa est laoreet orci. Pellentesque sagittis ex
        sapien, nec iaculis orci sollicitudin sed. Vestibulum ante ipsum primis
        in faucibus orci luctus et ultrices posuere cubilia Curae; Pellentesque
        habitant morbi tristique senectus et netus et malesuada fames ac turpis
        egestas. Cras volutpat nisi et bibendum viverra.`,
      },
    },
  },
  {
    id: `HEALTH`,
    data: {
      component: Health,
      meta: {
        sectionTitle: `Health`,
        question: `How I would rate my personal health and wellness.`,
      },
    },
  },
  {
    id: `HEALTH_PLAN`,
    data: {
      component: HealthPlan,
      meta: {
        sectionTitle: `Health`,
        question: `My action plan for improving my overall health and well being.`,
      },
    },
  },
  {
    id: `INTRO_BONUS`,
    data: {
      component: SectionIntro,
      meta: {
        sectionTitle: `Bonus`,
        question: `Lastly, questions to ponder and ask yourself...`,
      },
      introProps: {
        text: `Nunc ultrices, orci eu dictum sollicitudin, enim nisl semper nibh,
        egestas bibendum massa est laoreet orci. Pellentesque sagittis ex
        sapien, nec iaculis orci sollicitudin sed. Vestibulum ante ipsum primis
        in faucibus orci luctus et ultrices posuere cubilia Curae; Pellentesque
        habitant morbi tristique senectus et netus et malesuada fames ac turpis
        egestas. Cras volutpat nisi et bibendum viverra.`,
      },
    },
  },
  {
    id: `BONUS_COMMUNITY`,
    data: {
      component: Community,
      meta: {
        sectionTitle: `Bonus`,
        question: `How I will contribute and improve my community.`,
        subquestion: `Small or large, what will you do to give to others?`,
      },
    },
  },
  {
    id: `BONUS_MOONSHOT`,
    data: {
      component: Moonshot,
      meta: {
        sectionTitle: `Bonus`,
        question: `Something that I will do one day.`,
        subquestion: `What is a moonshot goal of yours? Something a bit crazy, out of the ordinary. What will you do to get that much closer to getting to that goal in this next year?`,
      },
    },
  },
]

export default questionnaireSteps
