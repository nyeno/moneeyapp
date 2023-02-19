import { gql, useQuery } from '@apollo/client'

export type CompanyType = {
  ceo: string;
  cto: string;
  name: string;
}

type CompanyDataType = {
  company: CompanyType
}

export const GET_COMPANY_QUERY = gql`
  query CompanyQuery {
    company {
      ceo
      cto
      name
    }
  }
`;

export function useCompanyQuery() {
    return useQuery<CompanyDataType>(GET_COMPANY_QUERY);
}