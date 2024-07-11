export type Content = {
  image: { uri: string };
  categories: { name: string }[];
  name: string;
  experts: {
    firstName: string;
    lastName: string;
    title: string;
    company: string;
  }[];
};
