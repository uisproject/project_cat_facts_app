import instance from "../api/api";

export const useGetSingleFactApi = () => {
  return instance("/facts/random?animal_type=cat&amount=1");
};
