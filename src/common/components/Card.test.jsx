import Enzyme, { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Adapter from "enzyme-adapter-react-16";

import * as ReactRedux from "react-redux";
import Card from "./Card";

Enzyme.configure({ adapter: new Adapter() });

describe("Card Test", () => {
  test("Card Call Correctly", () => {
    const example = {
      id: 1,
      url: "img.jpg",
      likeId: 2845857,
      totalVote: 2,
      voteIds: [],
    };

    const wrapper = shallow(<Card {...example} />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
