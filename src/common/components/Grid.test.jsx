import Enzyme, { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Adapter from "enzyme-adapter-react-16";

import Grid from "./Grid";

Enzyme.configure({ adapter: new Adapter() });

describe("Grid Test", () => {
  test("Grid Call Correctly", () => {
    const wrapper = shallow(<Grid />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
