import Enzyme, { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Adapter from "enzyme-adapter-react-16";

import * as ReactRedux from "react-redux";
import List from "./List";

Enzyme.configure({ adapter: new Adapter() });

describe("List Test", () => {
  const useSelectorMock = jest.spyOn(ReactRedux, "useSelector");
  jest.spyOn(ReactRedux, "useDispatch");

  test("List Call Correctly when list is not available", () => {
    useSelectorMock.mockReturnValue([]);
    const wrapper = shallow(<List />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  test("List Call Correctly when list is available", () => {
    useSelectorMock.mockReturnValueOnce([1, 2, 3]);
    const wrapper = shallow(<List />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
