/** @format */
import PromptCard from "./PromptCard";

const Profile = ({ name, desc, data, handleDelete, handleEdit }) => {
  return (
    <section className='w-full'>
      <h1 className='text-left !z-[100] head_text'>
        <p className='blue_gradient '> {name} Profile </p>
      </h1>
      <p className='text-left desc'>{desc} </p>
      <div className='mt-10 prompt_layout '>
        {data.map((post) => (
          <PromptCard
            key={post._id}
            post={post}
            handleEdit={() => handleEdit && handleEdit(post)}
            handleDelete={() => handleDelete && handleDelete(post)}
          />
        ))}
      </div>
    </section>
  );
};

export default Profile;
