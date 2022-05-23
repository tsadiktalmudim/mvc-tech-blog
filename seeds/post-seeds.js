const { Post } = require("../models");

const postdata = [
  {
    title: "Donec posuere metus vitae ipsum.",
    post_content:
      "Netus et malesuada fames ac turpis egestas. Rutrum tellus pellentesque eu tincidunt tortor. Nisi porta lorem mollis aliquam. Mi tempus imperdiet nulla malesuada pellentesque elit. Sagittis purus sit amet volutpat. Pharetra et ultrices neque ornare aenean. Congue eu consequat ac felis donec. Ac turpis egestas integer eget aliquet nibh praesent tristique magna. Maecenas volutpat blandit aliquam etiam erat velit scelerisque in dictum. Lobortis feugiat vivamus at augue eget arcu dictum varius duis. Ipsum dolor sit amet consectetur adipiscing. Libero enim sed faucibus turpis. Viverra vitae congue eu consequat ac felis. Orci porta non pulvinar neque laoreet suspendisse interdum consectetur.",
    user_id: 10,
  },
  {
    title: "Morbi non quam nec dui luctus rutrum.",
    post_content:
      "Volutpat blandit aliquam etiam erat velit scelerisque. Fermentum dui faucibus in ornare quam viverra orci sagittis eu. Pellentesque eu tincidunt tortor aliquam nulla facilisi cras fermentum. Rhoncus aenean vel elit scelerisque mauris. Odio euismod lacinia at quis risus. Enim tortor at auctor urna nunc. Amet risus nullam eget felis eget nunc lobortis mattis. Id leo in vitae turpis massa sed elementum tempus. Ornare suspendisse sed nisi lacus sed viverra tellus in hac. Augue interdum velit euismod in. Lorem mollis aliquam ut porttitor leo a diam sollicitudin tempor. Lorem ipsum dolor sit amet consectetur adipiscing.",
    user_id: 8,
  },
  {
    title:
      "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.",
    post_content:
      "Mi proin sed libero enim sed. Accumsan in nisl nisi scelerisque eu. Dignissim enim sit amet venenatis urna cursus eget nunc scelerisque. Vel fringilla est ullamcorper eget nulla. Ut porttitor leo a diam sollicitudin tempor id. Pretium fusce id velit ut tortor pretium viverra suspendisse. Id interdum velit laoreet id donec ultrices tincidunt. Vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Non consectetur a erat nam. Eleifend quam adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus. Id venenatis a condimentum vitae sapien pellentesque habitant morbi. A pellentesque sit amet porttitor. Purus sit amet luctus venenatis lectus magna fringilla urna. Fusce id velit ut tortor. Sed lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi. Sapien pellentesque habitant morbi tristique. Mi proin sed libero enim sed faucibus turpis in eu. Vel risus commodo viverra maecenas accumsan lacus vel. Diam phasellus vestibulum lorem sed.",
    user_id: 1,
  },
  {
    title: "Nunc purus.",
    post_content:
      "Aliquet nec ullamcorper sit amet risus nullam eget. Cras ornare arcu dui vivamus arcu felis bibendum. Sollicitudin aliquam ultrices sagittis orci a scelerisque purus. Aenean et tortor at risus viverra. Sed turpis tincidunt id aliquet risus feugiat in. Scelerisque varius morbi enim nunc faucibus a pellentesque. A erat nam at lectus. Tincidunt ornare massa eget egestas purus viverra accumsan. Rutrum tellus pellentesque eu tincidunt tortor. Nulla at volutpat diam ut venenatis tellus in metus. Vestibulum lectus mauris ultrices eros in. Donec massa sapien faucibus et molestie ac feugiat sed lectus.",
    user_id: 4,
  },
  {
    title: "Pellentesque eget nunc.",
    post_content:
      "Pellentesque elit eget gravida cum sociis. Felis eget nunc lobortis mattis aliquam faucibus purus. Egestas congue quisque egestas diam in. Ipsum consequat nisl vel pretium lectus quam id leo. Donec enim diam vulputate ut pharetra. Ut aliquam purus sit amet luctus venenatis lectus magna fringilla. Risus viverra adipiscing at in tellus integer feugiat scelerisque varius. Enim lobortis scelerisque fermentum dui faucibus in ornare. Quisque sagittis purus sit amet volutpat consequat mauris nunc congue. Rhoncus mattis rhoncus urna neque viverra justo. In nisl nisi scelerisque eu ultrices. Pellentesque habitant morbi tristique senectus et netus et malesuada fames. Mauris cursus mattis molestie a iaculis at erat pellentesque. Duis at consectetur lorem donec massa sapien faucibus et molestie. Rhoncus urna neque viverra justo nec. Vestibulum lectus mauris ultrices eros.",
    user_id: 7,
  },
  {
    title: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    post_content:
      "Quam viverra orci sagittis eu volutpat odio facilisis. In iaculis nunc sed augue lacus viverra vitae. Mattis pellentesque id nibh tortor id. Consectetur lorem donec massa sapien faucibus et. Mattis rhoncus urna neque viverra justo nec ultrices dui sapien. Quam nulla porttitor massa id neque. Senectus et netus et malesuada fames ac turpis. Cras sed felis eget velit aliquet sagittis id consectetur purus. Tempus quam pellentesque nec nam aliquam sem. Ut porttitor leo a diam sollicitudin tempor. A scelerisque purus semper eget duis. Eu tincidunt tortor aliquam nulla facilisi. Porttitor eget dolor morbi non arcu risus quis varius quam. Turpis cursus in hac habitasse.",
    user_id: 4,
  },
  {
    title: "In hac habitasse platea dictumst.",
    post_content:
      "Morbi tincidunt ornare massa eget egestas purus. Leo vel orci porta non. Vitae tortor condimentum lacinia quis vel eros donec. Sed libero enim sed faucibus turpis in eu. Ac felis donec et odio pellentesque diam volutpat. Sed odio morbi quis commodo. Nunc pulvinar sapien et ligula ullamcorper malesuada proin libero. Ligula ullamcorper malesuada proin libero nunc consequat interdum. Quis risus sed vulputate odio ut enim blandit volutpat. Porta non pulvinar neque laoreet suspendisse interdum consectetur libero. Nunc sed id semper risus in hendrerit gravida. Dictum non consectetur a erat nam at lectus. Risus nullam eget felis eget nunc lobortis mattis aliquam. Volutpat lacus laoreet non curabitur gravida arcu ac. Mi sit amet mauris commodo quis imperdiet.",
    user_id: 1,
  },
  {
    title: "Morbi non quam nec dui luctus rutrum.",
    post_content:
      "Purus sit amet luctus venenatis lectus. Urna condimentum mattis pellentesque id. Placerat in egestas erat imperdiet sed euismod nisi. Arcu dui vivamus arcu felis bibendum ut tristique et egestas. Habitant morbi tristique senectus et. Sapien nec sagittis aliquam malesuada bibendum arcu vitae elementum curabitur. Amet nisl suscipit adipiscing bibendum est ultricies integer quis auctor. Pharetra convallis posuere morbi leo urna. Sapien et ligula ullamcorper malesuada. Purus semper eget duis at. Dictum at tempor commodo ullamcorper a lacus vestibulum sed. Tellus at urna condimentum mattis. Fermentum odio eu feugiat pretium nibh ipsum consequat nisl. Amet luctus venenatis lectus magna fringilla urna porttitor. Volutpat est velit egestas dui id. Blandit cursus risus at ultrices mi. Bibendum at varius vel pharetra vel turpis nunc. Etiam dignissim diam quis enim lobortis. Pretium fusce id velit ut tortor.",
    user_id: 1,
  },
  {
    title: "Duis ac nibh.",
    post_content:
      "Dignissim suspendisse in est ante in nibh mauris cursus mattis. Malesuada fames ac turpis egestas maecenas pharetra convallis posuere. Praesent semper feugiat nibh sed pulvinar proin. Sed vulputate odio ut enim blandit. Fermentum posuere urna nec tincidunt praesent. Leo in vitae turpis massa sed elementum tempus egestas. Ante in nibh mauris cursus mattis. Dictum at tempor commodo ullamcorper a lacus vestibulum sed. Pulvinar etiam non quam lacus suspendisse faucibus interdum posuere. Tortor consequat id porta nibh venenatis cras sed felis eget. Vitae proin sagittis nisl rhoncus mattis rhoncus.",
    user_id: 9,
  },
  {
    title: "Curabitur at ipsum ac tellus semper interdum.",
    post_content:
      "Urna porttitor rhoncus dolor purus non. Egestas congue quisque egestas diam in arcu cursus euismod quis. Leo integer malesuada nunc vel risus commodo. Sit amet nisl purus in mollis nunc sed id. Ornare arcu odio ut sem nulla pharetra diam sit amet. Elementum pulvinar etiam non quam. Nisl pretium fusce id velit ut tortor pretium viverra. Auctor neque vitae tempus quam pellentesque. Mauris in aliquam sem fringilla ut morbi tincidunt augue interdum. Pharetra massa massa ultricies mi.",
    user_id: 5,
  },
  {
    title: "In hac habitasse platea dictumst.",
    post_content:
      "Ante in nibh mauris cursus mattis molestie a iaculis. Nunc pulvinar sapien et ligula ullamcorper malesuada proin libero nunc. Iaculis at erat pellentesque adipiscing commodo elit. Faucibus interdum posuere lorem ipsum dolor sit amet consectetur adipiscing. Donec et odio pellentesque diam volutpat commodo sed. Neque vitae tempus quam pellentesque nec nam aliquam sem et. Habitant morbi tristique senectus et netus et malesuada fames. Odio morbi quis commodo odio aenean sed adipiscing. Lobortis scelerisque fermentum dui faucibus in ornare. Commodo viverra maecenas accumsan lacus vel facilisis volutpat. Faucibus nisl tincidunt eget nullam non nisi est. Volutpat ac tincidunt vitae semper quis lectus. Volutpat lacus laoreet non curabitur gravida arcu. Sed blandit libero volutpat sed cras ornare arcu dui vivamus. Integer enim neque volutpat ac tincidunt vitae semper quis.",
    user_id: 3,
  },
  {
    title: "Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.",
    post_content:
      "At ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget. Eu scelerisque felis imperdiet proin fermentum leo vel orci porta. Morbi tristique senectus et netus et malesuada fames ac. Amet est placerat in egestas erat imperdiet sed. Non diam phasellus vestibulum lorem sed risus. Nam libero justo laoreet sit amet cursus sit amet. Vivamus arcu felis bibendum ut tristique et egestas quis. Condimentum mattis pellentesque id nibh tortor id aliquet lectus. Dignissim enim sit amet venenatis urna. Odio ut sem nulla pharetra. Volutpat est velit egestas dui id. Pharetra magna ac placerat vestibulum.",
    user_id: 10,
  },
  {
    title: "Donec dapibus.",
    post_content:
      "Maecenas pharetra convallis posuere morbi leo urna molestie at. Elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique. Pharetra diam sit amet nisl suscipit adipiscing. Tempor nec feugiat nisl pretium. Aliquet risus feugiat in ante. Sed viverra tellus in hac habitasse platea dictumst vestibulum rhoncus. Rhoncus urna neque viverra justo nec ultrices dui sapien eget. Quam pellentesque nec nam aliquam sem et tortor. Sed viverra tellus in hac habitasse platea dictumst. Orci sagittis eu volutpat odio facilisis mauris. Posuere lorem ipsum dolor sit amet consectetur adipiscing elit duis. Hendrerit dolor magna eget est lorem ipsum dolor. Id venenatis a condimentum vitae sapien. Vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant. Ut lectus arcu bibendum at varius vel pharetra vel. Commodo nulla facilisi nullam vehicula ipsum a arcu. A diam maecenas sed enim. Non sodales neque sodales ut etiam sit amet nisl. Lectus sit amet est placerat in egestas. Ornare quam viverra orci sagittis eu volutpat odio facilisis mauris.",
    user_id: 8,
  },
  {
    title: "Nulla tellus.",
    post_content:
      "Id aliquet lectus proin nibh. Neque aliquam vestibulum morbi blandit cursus risus at. Porttitor massa id neque aliquam vestibulum. Id ornare arcu odio ut sem nulla. Tincidunt id aliquet risus feugiat in ante metus dictum at. Amet facilisis magna etiam tempor orci eu lobortis. Aliquet nec ullamcorper sit amet risus nullam. Mi quis hendrerit dolor magna. Lorem ipsum dolor sit amet consectetur adipiscing elit. Nunc sed id semper risus. Nec feugiat in fermentum posuere urna nec tincidunt. Lorem ipsum dolor sit amet consectetur adipiscing. Lectus urna duis convallis convallis tellus id. A diam maecenas sed enim ut. Eget magna fermentum iaculis eu non. Facilisis magna etiam tempor orci. Sit amet commodo nulla facilisi nullam. Et sollicitudin ac orci phasellus egestas. Vitae ultricies leo integer malesuada nunc. Blandit aliquam etiam erat velit scelerisque.",
    user_id: 3,
  },
  {
    title:
      "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.",
    post_content:
      "Pellentesque adipiscing commodo elit at imperdiet dui accumsan. Magna sit amet purus gravida quis blandit turpis cursus in. Sapien faucibus et molestie ac feugiat sed lectus. Commodo quis imperdiet massa tincidunt nunc. Eget mauris pharetra et ultrices neque ornare aenean euismod. Feugiat sed lectus vestibulum mattis ullamcorper velit sed. Mi ipsum faucibus vitae aliquet nec ullamcorper. Purus non enim praesent elementum. Vestibulum lectus mauris ultrices eros in cursus turpis massa. Purus semper eget duis at tellus at urna condimentum mattis. Cras adipiscing enim eu turpis egestas. Bibendum at varius vel pharetra vel turpis. Auctor urna nunc id cursus metus aliquam eleifend.",
    user_id: 3,
  },
  {
    title:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.",
    post_content:
      "Eget felis eget nunc lobortis mattis aliquam faucibus. Pharetra pharetra massa massa ultricies. Pellentesque nec nam aliquam sem et. Quis ipsum suspendisse ultrices gravida dictum fusce ut placerat orci. Nulla facilisi morbi tempus iaculis urna id. Aliquam ut porttitor leo a diam sollicitudin tempor. Amet mattis vulputate enim nulla aliquet porttitor lacus luctus. Cursus euismod quis viverra nibh. Fermentum dui faucibus in ornare quam viverra orci sagittis. Nulla facilisi cras fermentum odio eu feugiat pretium nibh. Ullamcorper sit amet risus nullam eget felis eget. Sagittis eu volutpat odio facilisis. Diam sollicitudin tempor id eu nisl nunc.",
    user_id: 7,
  },
  {
    title: "In hac habitasse platea dictumst.",
    post_content:
      "Aliquet enim tortor at auctor. Viverra orci sagittis eu volutpat odio. Feugiat sed lectus vestibulum mattis ullamcorper velit sed ullamcorper. Vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor posuere. Nisl nunc mi ipsum faucibus. Proin nibh nisl condimentum id venenatis a. Felis eget velit aliquet sagittis id consectetur purus ut faucibus. Mauris in aliquam sem fringilla ut. Ut faucibus pulvinar elementum integer enim. In metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Phasellus faucibus scelerisque eleifend donec. Mi sit amet mauris commodo quis. Vulputate sapien nec sagittis aliquam. A erat nam at lectus urna.",
    user_id: 6,
  },
  {
    title: "Etiam justo.",
    post_content:
      "Dui sapien eget mi proin sed libero. Sed risus pretium quam vulputate. Vel pretium lectus quam id. At tempor commodo ullamcorper a lacus vestibulum. Facilisi morbi tempus iaculis urna id volutpat. Arcu risus quis varius quam quisque id diam. Ut morbi tincidunt augue interdum velit euismod in pellentesque. Enim neque volutpat ac tincidunt vitae. Ultricies lacus sed turpis tincidunt id aliquet risus feugiat. Sed faucibus turpis in eu mi bibendum neque. Id velit ut tortor pretium viverra suspendisse. Sit amet tellus cras adipiscing enim eu. Et malesuada fames ac turpis. Nibh tellus molestie nunc non blandit. Aliquam sem fringilla ut morbi tincidunt augue interdum. Id cursus metus aliquam eleifend mi in. Amet porttitor eget dolor morbi. Integer enim neque volutpat ac tincidunt. Pharetra diam sit amet nisl suscipit. Dolor magna eget est lorem ipsum dolor sit amet consectetur.",
    user_id: 4,
  },
  {
    title: "Nulla ut erat id mauris vulputate elementum.",
    post_content:
      "Duis ultricies lacus sed turpis tincidunt id aliquet risus. Commodo ullamcorper a lacus vestibulum sed arcu non odio. A iaculis at erat pellentesque adipiscing commodo elit at. Dignissim diam quis enim lobortis scelerisque fermentum dui. Rutrum tellus pellentesque eu tincidunt. Rutrum tellus pellentesque eu tincidunt tortor aliquam. In eu mi bibendum neque egestas congue. Vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique. Integer enim neque volutpat ac tincidunt vitae semper. A diam maecenas sed enim. Auctor eu augue ut lectus arcu. Mauris pellentesque pulvinar pellentesque habitant morbi tristique. Id aliquet lectus proin nibh nisl condimentum id venenatis.",
    user_id: 6,
  },
  {
    title:
      "Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
    post_content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    user_id: 7,
  },
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
