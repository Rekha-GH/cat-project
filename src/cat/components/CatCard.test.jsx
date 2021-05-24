import Enzyme, { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Adapter from "enzyme-adapter-react-16";

import * as ReactRedux from "react-redux";
import CatCard from "./CatCard";

Enzyme.configure({ adapter: new Adapter() });

describe("CatCard Test", () => {
  const useSelectorMock = jest.spyOn(ReactRedux, "useSelector");

  jest.spyOn(ReactRedux, "useDispatch");

  test("CatCard Call Correctly", () => {
    useSelectorMock.mockReturnValue({
      id: 1,
      url: "img.jpg",
      likeId: 2845857,
      totalVote: 2,
      voteIds: [],
    });
    const wrapper = shallow(<CatCard />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
