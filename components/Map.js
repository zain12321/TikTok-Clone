import React from 'react'
import Video from './FriendStatus'



const items = [
  {
    id:1,
    video:"https://v16-webapp.tiktok.com/617fb27f5b0435f9e5ea692dcb3a778a/62597e14/video/tos/useast2a/tos-useast2a-pve-0037c001-aiso/e9b88ccd6da2474c8ef96a6b43f97a21/?a=1988&br=1046&bt=523&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=eXd.6HKVMyq8Zn_1Lwe2N6thml7Gb&l=202204150815300102450250320F9E2707&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=and5bTQ6Zm53PDMzZjczM0ApOzQ2ZmdlNWVoNzM3PGlpNGdnaF5ecjRfZDRgLS1kMWNzc140LjEuXl40YzVgNjI1LWE6Yw%3D%3D&vl=&vr="
  },
  {
    id:2,
    video:"https://v16-webapp.tiktok.com/617fb27f5b0435f9e5ea692dcb3a778a/62597e14/video/tos/useast2a/tos-useast2a-pve-0037c001-aiso/e9b88ccd6da2474c8ef96a6b43f97a21/?a=1988&br=1046&bt=523&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=eXd.6HKVMyq8Zn_1Lwe2N6thml7Gb&l=202204150815300102450250320F9E2707&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=and5bTQ6Zm53PDMzZjczM0ApOzQ2ZmdlNWVoNzM3PGlpNGdnaF5ecjRfZDRgLS1kMWNzc140LjEuXl40YzVgNjI1LWE6Yw%3D%3D&vl=&vr="
  },
  {
    id:3,
    video:"https://v16-webapp.tiktok.com/617fb27f5b0435f9e5ea692dcb3a778a/62597e14/video/tos/useast2a/tos-useast2a-pve-0037c001-aiso/e9b88ccd6da2474c8ef96a6b43f97a21/?a=1988&br=1046&bt=523&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=eXd.6HKVMyq8Zn_1Lwe2N6thml7Gb&l=202204150815300102450250320F9E2707&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=and5bTQ6Zm53PDMzZjczM0ApOzQ2ZmdlNWVoNzM3PGlpNGdnaF5ecjRfZDRgLS1kMWNzc140LjEuXl40YzVgNjI1LWE6Yw%3D%3D&vl=&vr="
  },
  {
    id:4,
    video:"https://v16-webapp.tiktok.com/617fb27f5b0435f9e5ea692dcb3a778a/62597e14/video/tos/useast2a/tos-useast2a-pve-0037c001-aiso/e9b88ccd6da2474c8ef96a6b43f97a21/?a=1988&br=1046&bt=523&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=eXd.6HKVMyq8Zn_1Lwe2N6thml7Gb&l=202204150815300102450250320F9E2707&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=and5bTQ6Zm53PDMzZjczM0ApOzQ2ZmdlNWVoNzM3PGlpNGdnaF5ecjRfZDRgLS1kMWNzc140LjEuXl40YzVgNjI1LWE6Yw%3D%3D&vl=&vr="
  },
  {
    id:5,
    video:"https://v16-webapp.tiktok.com/617fb27f5b0435f9e5ea692dcb3a778a/62597e14/video/tos/useast2a/tos-useast2a-pve-0037c001-aiso/e9b88ccd6da2474c8ef96a6b43f97a21/?a=1988&br=1046&bt=523&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=eXd.6HKVMyq8Zn_1Lwe2N6thml7Gb&l=202204150815300102450250320F9E2707&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=and5bTQ6Zm53PDMzZjczM0ApOzQ2ZmdlNWVoNzM3PGlpNGdnaF5ecjRfZDRgLS1kMWNzc140LjEuXl40YzVgNjI1LWE6Yw%3D%3D&vl=&vr="
  },

]
function Map() {
  return (
    <div>
      {items?.map((item) => (
        <Video {...item}/>
      ))}
      
    </div>
  )
}

export default Map