(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[747],{3341:function(e,n,h){(window.__NEXT_P=window.__NEXT_P||[]).push(["/policy",function(){return h(4671)}])},2617:function(e,n,h){"use strict";h.r(n),n.default={src:"/_next/static/media/chinhsachbaomat.763d75c3.png",height:512,width:512,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA7ElEQVR42mNABv+vJgeCMIrgn1NBrP8vxYX+vxi35veJgP+/Twb9/38xds3/S/Ghf04FsjL8v5Ul+vds+J/v+6z/f9mm8O/zZoZ/3/fZ/f97NuwPSI7h/4NiMaApL75sU/v/dYfMv5/3dvz7eiDl/+/jzi/+P2kSY/j/ZRHHn9M+D7/uD///+9XVvz8uz//7ZSsD0ITIh/9fN3FAHHcpbvKPw+7/v+xL/PF5I8OPH4dc/gPdMBnh+ps5XP8uRB/7ecjy/88jXv//XYg59v9mJhdE8koSE5j+P5fx/5WU6v+XE6v//57ICJFLZAIAUQiP11zphzMAAAAASUVORK5CYII=",blurWidth:8,blurHeight:8}},7866:function(e,n,h){"use strict";h.d(n,{Z:function(){return i}});var c=h(5121),x=h(129);let t=c.Z.create({baseURL:"https://api.duoctaynam.vn/",paramsSerializer:{encode:x.parse,serialize:x.stringify}});t.interceptors.request.use(async e=>e),t.interceptors.response.use(e=>e&&e.data?e.data:e,e=>{throw e});var i={send_mail:e=>t.post("/mail/send_mail",e)}},4671:function(e,n,h){"use strict";h.r(n),h.d(n,{default:function(){return u}});var c=h(5893),x=h(2693),t=h(7038),i=h(682),s=h(4051),l=h(1555),a=h(5675),d=h.n(a);h(1664);var r=h(7866),g=h(7294),o=h(3514);function u(){let e=new Date;var[n,a]=(0,g.useState)([]),[u,p]=(0,g.useState)([]),[f,m]=(0,g.useState)([]);let v=async e=>{let h=document.getElementById("title_error"),c=document.getElementById("title_success");if(h.classList.add("hidden"),c.classList.add("hidden"),""!=u&&""!=f){try{await r.Z.send_mail({hoten:f,dienthoai:u,ghichu:n,loai:"Ch\xednh s\xe1ch bảo mật"})}catch(e){console.log(e)}a(""),p(""),m(""),c.classList.remove("hidden"),setTimeout(()=>{c.classList.add("hidden")},2e3)}else h.classList.remove("hidden"),setTimeout(()=>{h.classList.add("hidden")},2e3)},j=e=>{let n=e.target.value.replace(/[^0-9\.\,]/g,"");document.getElementById("dienthoai").value=n};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)("div",{className:"section_home",children:[(0,c.jsx)("div",{className:"section_product",children:(0,c.jsxs)("div",{className:"section_header_title p_nowrap",children:[(0,c.jsx)("p",{children:"Ph\xf9 hợp, Th\xe2n thiện - Nổi bật, Kh\xe1c biệt"}),(0,c.jsx)("p",{children:"Thấu hiểu, S\xe1ng tạo - Đồng h\xe0nh, Chia sẻ"})]})}),(0,c.jsx)("div",{className:"section_product_detail",children:(0,c.jsx)(i.Z,{children:(0,c.jsxs)(s.Z,{children:[(0,c.jsxs)(l.Z,{sm:4,className:"section_product_detail_left",children:[(0,c.jsx)(d(),{width:150,src:h(2617),alt:"PHẦN MỀM T\xccM B\xc1C SĨ"}),(0,c.jsx)("h3",{children:"Ch\xednh s\xe1ch bảo mật"})]}),(0,c.jsxs)(l.Z,{sm:8,className:"section_product_detail_right",children:[(0,c.jsx)("p",{children:"Ch\xednh s\xe1ch bảo mật l\xe0 một t\xe0i liệu quan trọng m\xe0 c\xe1c tổ chức v\xe0 doanh nghiệp sử dụng để th\xf4ng b\xe1o cho người d\xf9ng v\xe0 kh\xe1ch h\xe0ng của họ về c\xe1ch thức thu thập, sử dụng, bảo vệ v\xe0 chia sẻ th\xf4ng tin c\xe1 nh\xe2n."}),(0,c.jsx)("p",{children:"Ch\xednh s\xe1ch n\xe0y thường bao gồm th\xf4ng tin về loại dữ liệu được thu thập, l\xfd do thu thập, c\xe1ch thức lưu trữ v\xe0 bảo vệ dữ liệu, cũng như quyền của người d\xf9ng đối với th\xf4ng tin c\xe1 nh\xe2n của họ. Mục ti\xeau của ch\xednh s\xe1ch bảo mật l\xe0 tăng cường minh bạch, x\xe2y dựng niềm tin v\xe0 tu\xe2n thủ c\xe1c quy định ph\xe1p l\xfd li\xean quan đến bảo vệ dữ liệu c\xe1 nh\xe2n."})]}),(0,c.jsxs)(l.Z,{sm:12,className:"section_product_footer",children:[(0,c.jsxs)("h1",{children:[e.getFullYear()-2006," năm"]}),(0,c.jsx)("p",{children:"Kinh nghiệm"})]})]})})}),(0,c.jsx)("div",{children:(0,c.jsx)(i.Z,{children:(0,c.jsxs)(s.Z,{children:[(0,c.jsx)(l.Z,{xs:12,children:(0,c.jsx)("div",{className:"section_title",children:(0,c.jsx)("h2",{children:"CH\xcdNH S\xc1CH BẢO MẬT"})})}),(0,c.jsx)(l.Z,{xs:12,children:(0,c.jsxs)("div",{className:"policy_content",children:[(0,c.jsx)("p",{className:"title",children:"1. Mục đ\xedch thu thập th\xf4ng tin c\xe1 nh\xe2n"}),(0,c.jsx)("p",{children:"Mục đ\xedch của việc thu thập th\xf4ng tin kh\xe1ch h\xe0ng nhằm li\xean quan đến c\xe1c vấn đề như:"}),(0,c.jsx)("p",{children:"- Hỗ trợ kh\xe1ch h\xe0ng: tư vấn c\xe1c dịch vụ của ch\xfang t\xf4i."}),(0,c.jsx)("p",{children:"- Cung cấp th\xf4ng tin c\xe1c dịch vụ v\xe0 hỗ trợ theo y\xeau cầu của kh\xe1ch h\xe0ng."}),(0,c.jsx)("p",{children:"- Gửi th\xf4ng b\xe1o c\xe1c chương tr\xecnh, dịch vụ mới nhất của ch\xfang t\xf4i."}),(0,c.jsx)("p",{children:"- Giải quyết vấn đề ph\xe1t sinh khi sử dụng dịch vụ."}),(0,c.jsx)("p",{children:"- Ngăn chặn c\xe1c hoạt động phạm ph\xe1p."}),(0,c.jsx)("p",{children:"- Đo lường v\xe0 cải thiện c\xe1c dịch vụ của ch\xfang t\xf4i."}),(0,c.jsx)("p",{className:"title",children:"2. Phạm vi thu thập th\xf4ng tin"}),(0,c.jsx)("p",{children:"Ch\xfang t\xf4i thu thập th\xf4ng tin c\xe1 nh\xe2n của kh\xe1ch h\xe0ng khi:"}),(0,c.jsx)("p",{children:"- Kh\xe1ch h\xe0ng trực tiếp cung cấp: Kh\xe1ch h\xe0ng trực tiếp cung cấp bao gồm: họ t\xean, địa chỉ email, số điện thoại, địa chỉ."}),(0,c.jsxs)("p",{children:[" ","- Kh\xe1ch h\xe0ng tương t\xe1c với ch\xfang t\xf4i: Ch\xfang t\xf4i sử dụng cookies để thu thập một số th\xf4ng tin nhằm n\xe2ng cao chất lượng phục vụ khi kh\xe1ch h\xe0ng tương t\xe1c tr\xean website https://tpsoftct.vn/."]}),(0,c.jsx)("p",{children:"- Từ những nguồn hợp ph\xe1p kh\xe1c: Ch\xfang t\xf4i thu thập th\xf4ng tin kh\xe1ch h\xe0ng từ c\xe1c nguồn hợp ph\xe1p kh\xe1c."}),(0,c.jsx)("p",{className:"title",children:"3. Thời gian lưu trữ th\xf4ng tin"}),(0,c.jsx)("p",{children:"TPSoft sẽ lưu trữ c\xe1c th\xf4ng tin c\xe1 nh\xe2n do kh\xe1ch h\xe0ng cung cấp tr\xean c\xe1c hệ thống nội bộ của ch\xfang t\xf4i trong qu\xe1 tr\xecnh cung cấp dịch vụ cho kh\xe1ch h\xe0ng hoặc khi kh\xe1ch h\xe0ng c\xf3 y\xeau cầu hủy th\xf4ng tin đ\xe3 cấp."}),(0,c.jsx)("p",{className:"title",children:"4. Những người hoặc tổ chức c\xf3 thể được tiếp cận với th\xf4ng tin đ\xf3"}),(0,c.jsx)("p",{children:"- C\xe1c đối t\xe1c l\xe0 b\xean cung cấp dịch vụ cho ch\xfang t\xf4i li\xean quan đến thực hiện đơn h\xe0ng v\xe0 chỉ giới hạn trong phạm vi th\xf4ng tin cần thiết cũng như \xe1p dụng c\xe1c quy định đảm bảo an ninh, bảo mật c\xe1c th\xf4ng tin c\xe1 nh\xe2n."}),(0,c.jsx)("p",{children:"- Ch\xfang t\xf4i sử dụng dịch vụ từ một nh\xe0 cung cấp dịch vụ l\xe0 b\xean thứ ba để thực hiện một số hoạt động li\xean quan đến website https://tpsoftct.vn/. Khi đ\xf3, b\xean thứ ba c\xf3 thể truy cập hoặc xử l\xfd c\xe1c th\xf4ng tin c\xe1 nh\xe2n trong qu\xe1 tr\xecnh cung cấp c\xe1c dịch vụ đ\xf3. Ch\xfang t\xf4i y\xeau cầu c\xe1c b\xean thứ ba n\xe0y tu\xe2n thủ mọi luật lệ về bảo vệ th\xf4ng tin c\xe1 nh\xe2n li\xean quan v\xe0 c\xe1c y\xeau cầu về an ninh li\xean quan đến th\xf4ng tin c\xe1 nh\xe2n."}),(0,c.jsx)("p",{children:"- C\xe1c chương tr\xecnh c\xf3 t\xednh li\xean kết, đồng thực hiện, thu\xea ngo\xe0i cho c\xe1c mục đ\xedch được n\xeau tại Mục 1 v\xe0 lu\xf4n \xe1p dụng c\xe1c y\xeau cầu bảo mật th\xf4ng tin c\xe1 nh\xe2n."}),(0,c.jsx)("p",{children:"- Y\xeau cầu ph\xe1p l\xfd: Ch\xfang t\xf4i c\xf3 thể tiết lộ c\xe1c th\xf4ng tin c\xe1 nh\xe2n nếu điều đ\xf3 do luật ph\xe1p y\xeau cầu v\xe0 việc tiết lộ như vậy l\xe0 cần thiết một c\xe1ch hợp l\xfd để tu\xe2n thủ c\xe1c quy tr\xecnh ph\xe1p l\xfd."}),(0,c.jsx)("p",{children:"- Chuyển giao kinh doanh (nếu c\xf3): trong trường hợp s\xe1p nhập, hợp nhất to\xe0n bộ hoặc một phần với c\xf4ng ty kh\xe1c, người mua sẽ c\xf3 quyền truy cập th\xf4ng tin được ch\xfang t\xf4i lưu trữ, duy tr\xec trong đ\xf3 bao gồm cả th\xf4ng tin c\xe1 nh\xe2n."}),(0,c.jsx)("p",{className:"title",children:"5. Địa chỉ của đơn vị thu thập v\xe0 quản l\xfd th\xf4ng tin"}),(0,c.jsx)("p",{children:"- T\xean doanh nghiệp: C\xd4NG TY TNHH C\xd4NG NGHỆ PHẦN MỀM TPSOFT"}),(0,c.jsx)("p",{children:"- Th\xe0nh lập v\xe0 hoạt động theo Giấy chứng nhận đăng k\xfd doanh nghiệp số: 1801632394, được Sở Kế hoạch v\xe0 Đầu tư TP. Cần Thơ cấp ng\xe0y 21/03/2019"}),(0,c.jsx)("p",{children:"- Trụ sở ch\xednh: L\xf4 B303, đường B8, KDC 91B, Phường An Kh\xe1nh, Quận Ninh Kiều, TP. Cần Thơ"}),(0,c.jsx)("p",{className:"title",children:"6. Phương thức v\xe0 c\xf4ng cụ để người d\xf9ng tiếp cận v\xe0 chỉnh sửa dữ liệu:"}),(0,c.jsx)("p",{children:"Nếu qu\xfd kh\xe1ch c\xf3 bất cứ về y\xeau cầu n\xe0o về việc tiếp cận v\xe0 chỉnh sửa th\xf4ng tin c\xe1 nh\xe2n đ\xe3 cung cấp, qu\xfd kh\xe1ch c\xf3 thể:"}),(0,c.jsx)("p",{children:"- Gọi điện trực tiếp về số điện thoại: 0919 118 187"}),(0,c.jsx)("p",{children:"- Gửi mail: tpsoftct@gmail.com để được ch\xfang t\xf4i hỗ trợ"})]})})]})})}),(0,c.jsxs)("div",{className:"section_home_contact bg_product_tuvan",children:[(0,c.jsx)("h2",{style:{color:"#de2c68"},children:"Đăng k\xfd d\xf9ng thử"}),(0,c.jsxs)("div",{className:"section_home_div",children:[(0,c.jsx)("input",{style:{color:"black"},type:"text",name:"name",autoComplete:"off",placeholder:"Họ t\xean (*)",onChange:e=>{m(e.target.value)},value:f}),(0,c.jsx)("input",{style:{color:"black"},type:"text",name:"name",autoComplete:"off",placeholder:"Điện thoại (*)",id:"dienthoai",onKeyUp:e=>{j(e)},onChange:e=>{p(e.target.value)},value:u}),(0,c.jsx)("input",{style:{color:"black"},type:"text",name:"name",autoComplete:"off",placeholder:"Ghi ch\xfa",onChange:e=>{a(e.target.value)},value:n}),(0,c.jsxs)("div",{className:"flex_contact",children:[(0,c.jsx)("p",{id:"title_error",style:{color:"red"},className:"hidden",children:"Chưa nhập đủ th\xf4ng tin"}),(0,c.jsx)("p",{id:"title_success",style:{color:"green"},className:"hidden",children:"Gửi th\xe0nh c\xf4ng"}),(0,c.jsx)("button",{style:{backgroundColor:"#de2c68",color:"white"},onClick:e=>{v()},type:"button",children:"Gửi"})]})]})]}),(0,c.jsx)(o.default,{}),(0,c.jsx)("div",{className:"section_home_info bg_home_info",children:(0,c.jsx)(i.Z,{children:(0,c.jsxs)(s.Z,{children:[(0,c.jsxs)(l.Z,{lg:7,sm:12,xs:12,className:"section_info_left",children:[(0,c.jsxs)("div",{children:[(0,c.jsxs)("h3",{children:["~",(e.getFullYear()-2017)*219e3/1e3,"K"]}),(0,c.jsx)("div",{className:"border_bottom_info"}),(0,c.jsx)("p",{children:"Y\xcaU CẦU HỖ TRỢ"})]}),(0,c.jsxs)("div",{children:[(0,c.jsxs)("h3",{children:["~",(e.getFullYear()-2017)*600]}),(0,c.jsx)("div",{className:"border_bottom_info"}),(0,c.jsx)("p",{children:"KH\xc1CH H\xc0NG TIN D\xd9NG"})]}),(0,c.jsxs)("div",{children:[(0,c.jsx)("h3",{children:"8"}),(0,c.jsx)("div",{className:"border_bottom_info"}),(0,c.jsx)("p",{children:"SẢN PHẨM CỐT L\xd5I"})]}),(0,c.jsxs)("div",{children:[(0,c.jsxs)("h3",{children:["~",e.getFullYear()-2017," năm"]}),(0,c.jsx)("div",{className:"border_bottom_info"}),(0,c.jsx)("p",{children:"THỰC HIỆN KH\xc1T VỌNG"})]})]}),(0,c.jsx)(l.Z,{lg:5,sm:12,xs:12,className:"section_info_right",children:(0,c.jsxs)("div",{children:[(0,c.jsx)("h4",{children:"SỨ MỆNH CỦA CH\xdaNG T\xd4I"}),(0,c.jsx)("p",{children:"TPSoft lu\xf4n nỗ lực s\xe1ng tạo sản phẩm ng\xe0y một th\xf4ng minh hơn v\xe0 tiện \xedch hơn nhằm thực hiện kh\xe1t vọng ứng dụng những th\xe0nh tựu của c\xf4ng nghệ v\xe0o lĩnh vực y tế."})]})})]})})}),(0,c.jsx)("div",{className:"section_home_whatwedo",children:(0,c.jsx)(i.Z,{children:(0,c.jsxs)(s.Z,{children:[(0,c.jsx)(l.Z,{lg:6,sm:12,className:"section_whatwedo_left",children:(0,c.jsx)(d(),{className:"image_home_whatwedo",width:500,height:500,src:h(6119),alt:"Hệ sinh th\xe1i"})}),(0,c.jsxs)(l.Z,{lg:6,sm:12,className:"section_whatwedo_right",children:[(0,c.jsx)("h2",{children:"HIỂU BIẾT CỦA CH\xdaNG T\xd4I"}),(0,c.jsx)("p",{children:"Trong thế giới đang ng\xe0y c\xe0ng số h\xf3a, lĩnh vực chăm s\xf3c sức khỏe kh\xf4ng nằm ngo\xe0i cuộc c\xe1ch mạng c\xf4ng nghệ n\xe0y. Sự hội tụ của c\xf4ng nghệ đ\xe3 mang lại những đột ph\xe1 đ\xe1ng kể trong c\xe1ch thức chăm s\xf3c sức khỏe tr\xean to\xe0n thế giới."}),(0,c.jsx)("p",{children:"Ứng dụng c\xf4ng nghệ trong lĩnh vực y tế đ\xf3ng vai tr\xf2 then chốt trong việc đảm bảo hoạt động hiệu quả v\xe0 th\xf4ng suốt trong to\xe0n bộ quy tr\xecnh kh\xe1m chữa bệnh."}),(0,c.jsx)("p",{children:"Với sự hỗ trợ của c\xf4ng nghệ đ\xe3 giảm đ\xe1ng kể về mặt thời gian l\xe0m thủ tục, thời gian chờ kh\xe1m, thời gian chờ mua thuốc; giảm thiểu sai s\xf3t trong qu\xe1 tr\xecnh k\xea đơn. Đơn thuốc điện tử cũng dễ đọc, do đ\xf3 dược sĩ c\xf3 thể xử l\xfd nhanh ch\xf3ng v\xe0 \xedt xảy ra lỗi trong qu\xe1 tr\xecnh cấp ph\xe1t. Từ đ\xf3, c\xf3 thể tiết kiệm thời gian cho c\xe1c b\xe1c sĩ, dược sĩ v\xe0 cả người bệnh."})]})]})})}),(0,c.jsx)("div",{className:"section_home_culture",children:(0,c.jsx)(i.Z,{children:(0,c.jsxs)(s.Z,{children:[(0,c.jsxs)(l.Z,{lg:6,sm:12,className:"section_culture_right",children:[(0,c.jsx)("h2",{children:"NGUY\xcaN TẮC 6P CỦA CH\xdaNG T\xd4I"}),(0,c.jsxs)("div",{children:[(0,c.jsxs)("div",{className:"flex_right_culture",children:[(0,c.jsx)("h3",{children:"P"}),(0,c.jsx)("p",{children:"rotection: Bảo vệ mọi quyền lợi của bạn"})]}),(0,c.jsxs)("div",{className:"flex_right_culture",children:[(0,c.jsx)("h3",{children:"P"}),(0,c.jsx)("p",{children:"urpose: Giải quyết những vấn đề của bạn"})]}),(0,c.jsxs)("div",{className:"flex_right_culture",children:[(0,c.jsx)("h3",{children:"P"}),(0,c.jsx)("p",{children:"artnership: Đồng h\xe0nh ph\xe1t triển c\xf9ng bạn"})]}),(0,c.jsxs)("div",{className:"flex_right_culture",children:[(0,c.jsx)("h3",{children:"P"}),(0,c.jsx)("p",{children:"ersonalization: Sản phẩm, dịch vụ d\xe0nh ri\xeang bạn"})]}),(0,c.jsxs)("div",{className:"flex_right_culture",children:[(0,c.jsx)("h3",{children:"P"}),(0,c.jsx)("p",{children:"rofessional: Chuy\xean nghiệp khi l\xe0m việc c\xf9ng bạn"})]}),(0,c.jsxs)("div",{className:"flex_right_culture",children:[(0,c.jsx)("h3",{children:"P"}),(0,c.jsx)("p",{children:"roud: Tự h\xe0o khi được phục vụ bạn"})]})]})]}),(0,c.jsx)(l.Z,{lg:6,sm:12,className:"section_culture_left",children:(0,c.jsx)(d(),{style:{objectFit:"cover",borderRadius:"50px 0px 50px 0px",width:"1000px",height:"350px"},src:h(384),alt:"Commit"})})]})})})]}),(0,c.jsx)(x.Z,{}),(0,c.jsx)(t.Z,{})]})}},4654:function(){}},function(e){e.O(0,[642,284,740,774,888,179],function(){return e(e.s=3341)}),_N_E=e.O()}]);