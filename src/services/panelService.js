import api from "./api";

export default class PanelService {
  constructor() {
    this.getPanelsByState = async () => {
      const query = {
        query: `query  {
            panelsCountByState {
                    state,
                    amount
                    }
                }`,
      };

      const result = await api.post("/", query);

      //   console.log("result", result);

      if (result.data.errors) {
        console.error("error ", result.data.errors[0]);
        throw result.data.errors[0];
      } else {
        return result.data.data.panelsCountByState;
      }
    };

    this.getPanelsCostByZipcode = async () => {
      const query = {
        query: `query  {
                panelsCostByZipcode {
                      zipcode,
                      cost
                      }
                  }`,
      };

      const result = await api.post("/", query);

      //   console.log("result", result);

      if (result.data.errors) {
        console.error("error ", result.data.errors[0]);
        throw result.data.errors[0];
      } else {
        return result.data.data.panelsCostByZipcode;
      }
    };

    this.getPanelTop3Amount = async () => {
      const query = {
        query: `query  {
                panelsCountTop3ByMonth {
                      amount,
                      month
                      }
                  }`,
      };

      const result = await api.post("/", query);

      //   console.log("result", result);

      if (result.data.errors) {
        console.error("error ", result.data.errors[0]);
        throw result.data.errors[0];
      } else {
        return result.data.data.panelsCountTop3ByMonth;
      }
    };
  }
}
