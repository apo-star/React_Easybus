const Booking = () => {
  const { data } = useGetAllSeatQuery();
  const busTicket = data?.data;
  return <div></div>;
};

export default Booking;
