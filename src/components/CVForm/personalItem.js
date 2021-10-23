function PersonalItem(props) {
  const { updateState } = props;

  return (
    <div className="form-section" id="personal">
      <label htmlFor="name">Full Name</label>
      <input name="name" id="name" onChange={updateState}></input>
      <label htmlFor="phone">Phone Number</label>
      <input
        id="phone"
        name="phone"
        type="number"
        onChange={updateState}
      ></input>
      <label htmlFor="email">Email</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={updateState}
      ></input>
      <label htmlFor="address">Address</label>
      <input name="address" id="address" onChange={updateState}></input>
    </div>
  );
}

export default PersonalItem;
