const InstaLikes = () => {
  return (
    <div className="w-full relative bg-white h-[844px] overflow-hidden text-left text-xs text-black font-segoe-ui">
      <div className="absolute top-[0px] left-[0px] w-[390px] h-11 overflow-hidden text-center text-mini text-gray-100 font-sf-pro-text">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]" />
        <img
          className="absolute top-[calc(50%_-_4px)] right-[14.5px] w-[24.5px] h-[10.5px] object-cover"
          alt=""
          src="/battery@2x.png"
        />
        <img className="relative w-[15.9px] h-[11px]" alt="" src="/wifi.svg" />
        <img
          className="relative w-[17.7px] h-[10.7px]"
          alt=""
          src="/mobile-signal.svg"
        />
        <div className="absolute h-[40.91%] w-[14.41%] top-[31.82%] right-[80%] bottom-[27.27%] left-[5.59%] overflow-hidden">
          <div className="absolute w-[calc(100%_-_0.2px)] top-[calc(50%_-_9px)] left-[0px] tracking-[-0.3px] font-semibold inline-block">
            9:41
          </div>
        </div>
      </div>
      <div className="absolute bottom-[0px] left-[0px] w-[390px] h-[34px] overflow-hidden">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]" />
        <div className="absolute bottom-[9px] left-[calc(50%_-_67px)] rounded-81xl bg-gray-200 w-[134px] h-[5px]" />
      </div>
      <div className="absolute h-[4.5%] top-[91.94%] bottom-[3.55%] left-[0px] bg-white box-border overflow-hidden flex flex-col items-start justify-start pt-1.5 px-[25px] pb-0.5 border-t-[0.5px] border-solid border-gray-300">
        <div className="flex flex-row items-center justify-start gap-[0px_61px]">
          <div className="flex flex-row items-start justify-start gap-[0px_57px]">
            <img
              className="w-[22px] relative h-[22.7px]"
              alt=""
              src="/icon.svg"
            />
            <img
              className="w-[23.4px] relative h-[23.4px]"
              alt=""
              src="/shape1.svg"
            />
            <img
              className="w-[23.5px] relative h-[23.5px] object-cover"
              alt=""
              src="/tab-3@2x.png"
            />
          </div>
          <div className="flex flex-row items-center justify-start gap-[0px_46px]">
            <img
              className="w-[22px] relative h-[22px] overflow-hidden shrink-0"
              alt=""
              src="/iconsreels-1.svg"
            />
            <img
              className="w-7 relative rounded-[50%] h-7 object-cover"
              alt=""
              src="/ellipse-171@2x.png"
            />
          </div>
        </div>
      </div>
      <div className="absolute top-[41px] left-[-5px] h-[45px] flex flex-row items-center justify-center p-2.5 box-border gap-[0px_10px] text-center text-base">
        <img
          className="w-[46px] relative h-[45px]"
          alt=""
          src="/frame-72.svg"
        />
        <div className="w-[90px] relative tracking-[-0.3px] font-semibold flex items-center justify-center h-[43px] shrink-0">
          Notifications
        </div>
      </div>
      <div className="absolute top-[101px] left-[27px] text-sm tracking-[-0.3px] text-center inline-block w-[51px] h-[19px]">
        New
      </div>
      <div className="absolute top-[204px] left-[32px] text-sm tracking-[-0.3px] text-center inline-block w-[51px] h-[19px]">
        Today
      </div>
      <div className="absolute top-[305px] left-[35px] text-sm tracking-[-0.3px] text-center inline-block w-[90px] h-[19px]">
        Last 7 Days
      </div>
      <div className="absolute top-[485px] left-[38px] text-sm tracking-[-0.3px] text-center inline-block w-[90px] h-[19px]">
        Last 30 Days
      </div>
      <div className="absolute top-[137px] left-[30px] w-[332px] flex flex-row items-start justify-start gap-[0px_37px] text-center">
        <div className="h-[50px] flex flex-row items-start justify-start">
          <img
            className="w-[50px] relative h-[50px] object-cover"
            alt=""
            src="/ellipse-22@2x.png"
          />
          <div className="w-[195px] relative tracking-[-0.3px] flex items-center h-[50px] shrink-0">
            <span className="w-full">
              <span>
                <span className="font-semibold font-segoe-ui">shreeya_08</span>
                <span className="text-darkgray-100">{` liked your photo. `}</span>
              </span>
              <span className="text-darkgray-100">
                <span>1hr</span>
              </span>
            </span>
          </div>
        </div>
        <img
          className="w-12 relative rounded-3xs h-[50px] object-cover"
          alt=""
          src="/rectangle-8@2x.png"
        />
      </div>
      <div className="absolute top-[341px] left-[30px] flex flex-row items-start justify-start gap-[0px_7px]">
        <div className="h-[50px] flex flex-row items-start justify-start gap-[0px_14px]">
          <img
            className="w-[50px] relative h-[50px] object-cover"
            alt=""
            src="/ellipse-22-1@2x.png"
          />
          <div className="w-[211px] relative tracking-[-0.3px] flex items-center h-[50px] shrink-0">
            <span className="w-full">
              <span>
                <span className="font-semibold font-segoe-ui">Gaurav_08</span>
                <span className="text-darkgray-100">
                  {" "}
                  liked your comment:Amazing!
                </span>
              </span>
              <span className="text-darkgray-100">
                <span>6d</span>
              </span>
            </span>
          </div>
        </div>
        <img
          className="w-12 relative rounded-3xs h-[50px] object-cover"
          alt=""
          src="/rectangle-8-3@2x.png"
        />
      </div>
      <div className="absolute top-[653px] left-[30px] w-[330px] flex flex-row items-start justify-start gap-[0px_7px]">
        <div className="h-[50px] flex flex-row items-start justify-start gap-[0px_14px]">
          <img
            className="w-[50px] relative h-[50px] object-cover"
            alt=""
            src="/ellipse-22-4@2x.png"
          />
          <div className="w-[211px] relative tracking-[-0.3px] flex items-center h-[50px] shrink-0">
            <span className="w-full">
              <span>
                <span className="font-semibold font-segoe-ui">
                  nandiniiiii_15
                </span>
                <span className="text-darkgray-100">{` liked your comment: Nice Saree. `}</span>
              </span>
              <span className="text-darkgray-100">
                <span>3w</span>
              </span>
            </span>
          </div>
        </div>
        <img
          className="w-12 relative rounded-3xs h-[50px] object-cover"
          alt=""
          src="/rectangle-8-2@2x.png"
        />
      </div>
      <div className="absolute top-[410px] left-[30px] w-[332px] flex flex-row items-start justify-start">
        <div className="w-[332px] flex flex-row items-start justify-start gap-[0px_8px]">
          <img
            className="w-[50px] relative h-[50px] object-cover"
            alt=""
            src="/ellipse-22-1@2x.png"
          />
          <div className="flex flex-row items-start justify-start relative gap-[0px_10px]">
            <div className="w-[216px] relative tracking-[-0.3px] flex items-center h-[50px] shrink-0 z-[0]">
              <span className="w-full">
                <span className="whitespace-pre-wrap">
                  <span className="font-semibold">Gaurav_08</span>
                </span>
                <span>
                  <span className="whitespace-pre-wrap">{` mentioned you in comment: `}</span>
                  <span className="text-cornflowerblue-200">@itzz_N</span>
                  <span className="text-black whitespace-pre-wrap">{` Thank you.      `}</span>
                  <span className="text-darkgray-100">6d</span>
                </span>
              </span>
            </div>
            <img
              className="w-[5%] absolute !m-[0] h-[21.2%] top-[58%] right-[48.7%] bottom-[20.8%] left-[46.3%] max-w-full overflow-hidden max-h-full z-[1]"
              alt=""
              src="/group1.svg"
            />
          </div>
          <img
            className="w-12 relative rounded-3xs h-[50px] object-cover"
            alt=""
            src="/rectangle-8-3@2x.png"
          />
        </div>
      </div>
      <img
        className="absolute top-[460px] left-[90px] w-2.5 h-2.5"
        alt=""
        src="/like.svg"
      />
      <div className="absolute top-[461px] left-[106px] text-[11px] tracking-[-0.3px] text-darkgray-100 flex items-center w-[34px] h-[9px]">
        Reply
      </div>
      <div className="absolute top-[521px] left-[30px] flex flex-row items-center justify-start gap-[0px_15px]">
        <div className="flex flex-row items-end justify-start gap-[0px_11px]">
          <img
            className="w-[50px] relative h-[50px] object-cover"
            alt=""
            src="/ellipse-22-2@2x.png"
          />
          <div className="w-[150px] relative tracking-[-0.3px] flex items-center h-[41px] shrink-0">
            <span className="w-full">
              <span>
                <span className="font-semibold font-segoe-ui">shubhamH_05</span>
                <span className="text-darkgray-100">{` requested to follow you. `}</span>
              </span>
              <span className="text-darkgray-100">
                <span>2w</span>
                <span className="text-black">{` `}</span>
              </span>
            </span>
          </div>
        </div>
        <div className="flex flex-row items-center justify-start gap-[0px_16px] text-center text-white">
          <div className="w-[69px] rounded-8xs bg-cornflowerblue-100 h-6 overflow-hidden shrink-0 flex flex-row items-center justify-center">
            <div className="relative tracking-[-0.3px]">Confirm</div>
          </div>
          <img className="w-2.5 relative h-[11px]" alt="" src="/group-11.svg" />
        </div>
      </div>
      <div className="absolute top-[588px] left-[29px] flex flex-row items-center justify-start gap-[0px_15px]">
        <div className="flex flex-row items-end justify-start gap-[0px_11px]">
          <img
            className="w-[50px] relative h-[50px] object-cover"
            alt=""
            src="/ellipse-22-3@2x.png"
          />
          <div className="w-[150px] relative tracking-[-0.3px] flex items-center h-[41px] shrink-0">
            <span className="w-full">
              <span>
                <span className="font-semibold font-segoe-ui">hritiks_56</span>
                <span className="text-darkgray-100">{` requested to follow you. `}</span>
              </span>
              <span className="text-darkgray-100">
                <span>2w</span>
                <span className="text-black">{` `}</span>
              </span>
            </span>
          </div>
        </div>
        <div className="flex flex-row items-center justify-start gap-[0px_16px] text-center text-white">
          <div className="w-[69px] rounded-8xs bg-cornflowerblue-100 h-6 overflow-hidden shrink-0 flex flex-row items-center justify-center">
            <div className="relative tracking-[-0.3px]">Confirm</div>
          </div>
          <img className="w-2.5 relative h-[11px]" alt="" src="/group-11.svg" />
        </div>
      </div>
      <div className="absolute top-[720px] left-[32px] w-[328px] flex flex-row items-center justify-start gap-[0px_15px]">
        <div className="flex flex-row items-end justify-start gap-[0px_11px]">
          <img
            className="w-[50px] relative h-[50px] object-cover"
            alt=""
            src="/ellipse-22-5@2x.png"
          />
          <div className="w-[150px] relative tracking-[-0.3px] flex items-center h-[41px] shrink-0">
            <span className="w-full">
              <span>
                <span className="font-semibold font-segoe-ui">archiii__56</span>
                <span className="text-darkgray-100">
                  {" "}
                  requested to follow you.
                </span>
              </span>
              <span className="text-darkgray-100">
                <span> 3w</span>
                <span className="text-black">{` `}</span>
              </span>
            </span>
          </div>
        </div>
        <div className="flex flex-row items-center justify-start gap-[0px_16px] text-center text-white">
          <div className="w-[69px] rounded-8xs bg-cornflowerblue-100 h-6 overflow-hidden shrink-0 flex flex-row items-center justify-center">
            <div className="relative tracking-[-0.3px]">Confirm</div>
          </div>
          <img className="w-2.5 relative h-[11px]" alt="" src="/group-11.svg" />
        </div>
      </div>
      <div className="absolute top-[239px] left-[30px] flex flex-row items-start justify-start gap-[0px_28px]">
        <div className="flex flex-row items-start justify-start gap-[0px_7px]">
          <img
            className="w-[58px] relative h-[61px] object-cover"
            alt=""
            src="/group-1@2x.png"
          />
          <div className="w-[186px] relative h-[61px]">
            <div className="absolute top-[0px] left-[0px] h-[50px] flex flex-row items-start justify-start">
              <div className="w-[202px] relative tracking-[-0.3px] flex items-center h-[50px] shrink-0">
                <span className="w-full">
                  <span>
                    <span className="font-semibold font-segoe-ui">
                      diksha_02
                    </span>
                    <span className="font-segoe-ui">,</span>
                    <span className="font-semibold font-segoe-ui">
                      aaditi_01
                    </span>
                    <span className="font-segoe-ui">{` and `}</span>
                    <span className="font-semibold font-segoe-ui">{`55 others `}</span>
                    <span className="whitespace-pre-wrap text-darkgray-100">{`    liked your photo. `}</span>
                  </span>
                  <span className="whitespace-pre-wrap text-darkgray-100">
                    <span>2hr</span>
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
        <img
          className="w-12 relative rounded-3xs h-[50px] object-cover"
          alt=""
          src="/rectangle-8@2x.png"
        />
      </div>
    </div>
  );
};

export default InstaLikes;
