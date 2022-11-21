const ActivityForm = () => {
  return (
    <form>
      <div>
        <label>Name: </label>
        <input type='text' />
      </div>
      <div>
        <label>Difficulty: </label>
        <input type='number' />
      </div>
      <div>
        <label>Duration: </label>
        <input type='number' />
      </div>
    </form>
  );
};

export default ActivityForm;
