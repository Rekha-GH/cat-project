import Enzyme, { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Adapter from "enzyme-adapter-react-16";

import * as ReactRedux from "react-redux";
import ErrorMessage from "./ErrorMessage";

Enzyme.configure({ adapter: new Adapter() });

describe("ErrorMessage Test", () => {
  const useSelectorMock = jest.spyOn(ReactRedux, "useSelector");
  jest.spyOn(ReactRedux, "useDispatch");

  test("ErrorMessage Call Correctly when ErrorMessage is not available", () => {
    useSelectorMock.mockReturnValue(undefined);
    const wrapper = shallow(<ErrorMessage />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  test("ErrorMessage Call Correctly when ErrorMessage is available", () => {
    useSelectorMock.mockReturnValueOnce("error message");
    const wrapper = shallow(<ErrorMessage />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
