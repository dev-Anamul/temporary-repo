export class ColorGenerator {
  constructor() {
    this.colors = {
      pending: {
        background: "bg-yellow-700 hover:bg-yellow-600",
        text: "text-yellow-600",
      },
      approved: {
        background: "bg-green-700 hover:bg-green-600",
        text: "text-green-600",
      },
      rejected: {
        background: "bg-red-700 hover:bg-red-600",
        text: "text-red-600",
      },
      warning: {
        background: "bg-yellow-700 hover:bg-yellow-600",
        text: "text-fuchsia-600",
      },
    };
  }

  expenseStatus(status) {
    return this.colors[status?.toLowerCase()]?.text;
  }
}
