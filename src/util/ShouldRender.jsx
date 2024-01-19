function ShouldRender({ cond, children }) {
  return cond ? children : null;
}

export default ShouldRender;
