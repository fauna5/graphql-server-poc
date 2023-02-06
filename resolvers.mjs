// Fake Database

const nodes = [
  {
    __typename: "Transaction",
    id: "transaction-0",
    merchant: "Apple",
    description: "iPhone 10",
  },
  {
    __typename: "Transaction",
    id: "transaction-1",
    merchant: "Google",
    description: "Pixel 5",
  },
  {
    __typename: "Transaction",
    id: "transaction-2",
    merchant: "Samsung",
    description: "Galaxy S21",
  },
  {
    __typename: "Transaction",
    id: "transaction-3",
    merchant: "Microsoft",
    description: "Surface Pro 7",
  },
  {
    __typename: "Transaction",
    id: "transaction-4",
    merchant: "Amazon",
    description: "Kindle Paperwhite",
  },
  {
    __typename: "Transaction",
    id: "transaction-5",
    merchant: "Apple",
    description: "MacBook Pro 16",
  },
  {
    __typename: "Transaction",
    id: "transaction-6",
    merchant: "Google",
    description: "Nest Hub Max",
  },
  {
    __typename: "Transaction",
    id: "transaction-7",
    merchant: "Samsung",
    description: "Galaxy Watch 3",
  },
  {
    __typename: "Transaction",
    id: "transaction-8",
    merchant: "Microsoft",
    description: "Xbox Series X",
  },
  {
    __typename: "Transaction",
    id: "transaction-9",
    merchant: "Amazon",
    description: "Echo Dot (4th Gen)",
  },
  {
    __typename: "Transaction",
    id: "transaction-10",
    merchant: "Apple",
    description: "AirPods Max",
  },
  {
    __typename: "Transaction",
    id: "transaction-11",
    merchant: "Google",
    description: "Chromebook Pixelbook Go",
  },
  {
    __typename: "Transaction",
    id: "transaction-12",
    merchant: "Samsung",
    description: "Galaxy Tab S7",
  },
  {
    __typename: "Transaction",
    id: "transaction-13",
    merchant: "Microsoft",
    description: "Surface Laptop Go",
  },
  {
    __typename: "Transaction",
    id: "transaction-14",
    merchant: "Amazon",
    description: "Fire TV Stick Lite",
  },
  {
    __typename: "Transaction",
    id: "transaction-15",
    merchant: "Apple",
    description: "iPad Pro 11",
  },
  {
    __typename: "Transaction",
    id: "transaction-16",
    merchant: "Google",
    description: "Pixel Buds",
  },
  {
    __typename: "Transaction",
    id: "transaction-17",
    merchant: "Samsung",
    description: "Galaxy Z Fold 2",
  },
  {
    __typename: "Transaction",
    id: "transaction-18",
    merchant: "Microsoft",
    description: "Surface Headphones 2",
  },
  {
    __typename: "Transaction",
    id: "transaction-19",
    merchant: "Amazon",
    description: "Echo Show 8",
  },
];

export function nodeResolver({ id }) {
  return nodes.find((node) => node.id === id);
}

export function transactionsResolver() {
  return nodes.filter((node) => node.__typename === "Transaction");
}

export function transactionResolver(_, { id }) {
  return nodes.find(
    (node) => node.__typename === "Transaction" && node.id === id
  );
}

export const rootValue = {
  node: (args) => {
    return nodeResolver(args);
  },
};
