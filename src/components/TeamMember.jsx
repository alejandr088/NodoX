export default function TeamMember({ name, role, bio, image }) {
  return (
    <div
      className="card p-4 text-center hover:shadow-xl transition duration-300 transform hover:-translate-y-2 hover:scale-105"
      tabIndex="0"
      aria-label={`${name}, ${role}`}
    >
      <div className="w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full border-2 border-red-100 dark:border-gray-700">
        <img
          src={image}
          alt={`Foto de ${name}`}
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="text-xl font-bold text-gray-900 dark:text-white">{name}</h3>
      <p className="text-red-500 mb-2">{role}</p>
      <p className="text-gray-600 dark:text-gray-400 text-sm">{bio}</p>
    </div>
  )
}
