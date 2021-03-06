function PersonalItem({ id, element }) {
  return (
    <div key={"personal" + id} id={"personal-" + id} className="header">
      <div className="name">{element.name.value}</div>
      <div>
        {element.phone.value} | {element.email.value}
      </div>
      <div>{element.address.value}</div>
    </div>
  );
}

export default PersonalItem;
