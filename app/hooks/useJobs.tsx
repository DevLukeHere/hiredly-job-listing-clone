import { request } from "graphql-request";
import useSWR from "swr";

const fetcher = (query: string) =>
  request(
    "https://staging-wobbjobs.hiredly.com/api/job_seeker/v1/graphql",
    query
  );

export function useJobs(
  first: number | null,
  last: number | null,
  query: string,
  startCursor: string | null,
  endCursor: string
) {
  const { data, error, isLoading } = useSWR(
    `{
    jobListsSearchResults(${query}, first: ${first}, last: ${last}, before: "${startCursor}", after: "${endCursor}") {
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
      nodes {
        id
        title
        spotlight
        keywordHighlight
        keywordHighlightText
        jobType
        stateRegion
        bookmark
        boosted
        haveApplied
        haveRejected
        createdAt
        salary
        slug
        active    
        secondaryCompanyId
        activeAt
        gptSummary
        skills
        scraped
        company {
          name
          logo
          lastActiveAt
        }
      }
    }
  }`,
    fetcher
  );

  return {
    jobs: data,
    isLoading,
    isError: error,
  };
}
