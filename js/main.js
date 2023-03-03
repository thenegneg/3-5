
let x = 10;
let flag = 0;
for (let i = 1; i <= x; i++) {
  if (x % i === 0) {
    flag++;
    console.log(i);
  }
}
if (flag === 2) {
  console.log(`prime ${x}`);
} else {
  console.log(`not-prime ${x}`);
}
console.log("**********************************************");
console.log("function");
function prime(q) {
  let flag = 0;
  for (let i = 1; i <= q; i++) {
    if (q % i === 0) {
      flag++;
      console.log(i);
    }
  }
  if (flag === 2) {
    console.log(`prime ${q}`);
  } else {
    console.log(`not-prime ${q}`);
  }
}
prime(15);
console.log("**********************************************");
console.log("anonimus");
const prime01 = function (w) {
  let flag = 0;
  for (let i = 1; i <= w; i++) {
    if (w % i === 0) {
      flag++;
      console.log(i);
    }
  }
  if (flag === 2) {
    console.log(`prime ${w}`);
  } else {
    console.log(`not-prime ${w}`);
  }
};
prime(5);
console.log("**********************************************");
console.log("arrow");
const prime02 = (a) => {
  let flag = 0;
  for (let i = 1; i <= a; i++) {
    if (a % i === 0) {
      flag++;
      console.log(i);
    }
  }
  if (flag === 2) {
    console.log(`prime ${a}`);
  } else {
    console.log(`not-prime ${a}`);
  }
};
prime02(25);
console.log("**********************************************");
console.log("implicit");
let returnF = (f) => console.log(f);
returnF("negneg");

const returnage = (age) => age;
console.log(returnage(23));
console.log("**********************************************");
console.log("good array");
let c = ["negneg", 23, true, null, false, 100.01];
console.log(c);
console.log(c[0]);
console.log(c[1]);
console.log(c[2]);
console.log(c[3]);
console.log(c[4]);
console.log(c[5]);
console.log(c[6]);
console.log("**********************************************");
console.log("bad array");
let g = new Array("negiin", 1999, true, null);
console.log(g);
console.log("**********************************************");
console.log("push pop");
let data = ["negneg", 100, false, 15.2, null];
console.log(data);
data.pop();
console.log(data);
data.push(true);
console.log(data);
data.reverse();
console.log(data);
console.log("**********************************************");
console.log("shift unshift");
let y = ["rose", 38, true, null, 10.5];
console.log(y);
y.shift();
console.log(y);
y.unshift("negneg");
console.log(y);
console.log("**********************************************");
console.log("associative");
let dataa = [];
dataa["firstName"] = "negneg";
dataa["lasttName"] = "RV";
dataa["age"] = 23;
dataa["email"] = "bluemoonrinna@gmail.com";
console.log(
  `my name is: ${dataa["firstName"]}\nand my last name is: ${dataa["lastName"]}\nand my age is: ${dataa["age"]}\nand my email is: ${dataa["email"]}`
);
console.log(dataa);
console.log(typeof dataa);
console.log(Array.isArray(dataa));
console.log("**********************************************");
console.log("tostring");
let aa=[1,2,3,"test","negneg",true,false]
console.log(aa);
let test=aa.toString()
console.log(test);
console.log(typeof test);
console.log("**********************************************");
console.log("join");
let ab=["negneg",100,true,false]
console.log(ab);
let result=ab.join(" * ")
console.log(result);
let result01=ab.join("\n")
console.log(result01);
console.log("**********************************************");
console.log("delet");
let ac=[1,2,3,"test",false]
delete ac[2]
console.log(ac);
console.log("**********************************************");
console.log("splice");
let ad=["negneg","rahim","test",1,2,3,true]
console.log(ad);
ad.splice(1,2,"hiiiiii","hahaha",false)
console.log(ad);
console.log("**********************************************");
console.log("concat");
let ae=[1,2,3,"negneg"]
let af=["rahim",true,5.3,"rose"]
console.log(ae);
console.log(af);
ag=ae.concat(af)
console.log(ag);