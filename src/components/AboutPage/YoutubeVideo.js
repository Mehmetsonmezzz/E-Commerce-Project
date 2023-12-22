const YouTubeVideo = () => {
  return (
    <div className="flex items-center justify-center mb-24 lg:mb-52 px-12  lg:py-0 lg:px-0">
      <iframe
        width="1280"
        height="720"
        src="https://www.youtube.com/embed/adQyBxLvYwg"
        title="Workintech hızlandırılmış yazılımcı geliştirme programı"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default YouTubeVideo;
