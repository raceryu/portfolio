export default function DigicoreBackdrop() {
  return (
    <div className="digicore-backdrop" aria-hidden="true">
      <span className="dc-star dc-star--one">✦</span>
      <span className="dc-star dc-star--two">☆</span>
      <span className="dc-star dc-star--three">✧</span>
      <span className="dc-star dc-star--four">⋆</span>
      <span className="dc-star dc-star--five">+</span>
      <span className="dc-star dc-star--six">✦</span>

      <div className="dc-window dc-window--status">
        <div className="dc-window-title">
          <span>STATUS.EXE</span>
          <b>_ □ ×</b>
        </div>
        <div className="dc-window-body">
          <p>connection: ONLINE</p>
          <div className="dc-meter"><i /></div>
          <small>idea_board ........ 86%</small>
          <small>memory_cloud ....... OK</small>
        </div>
      </div>

      <div className="dc-window dc-window--message">
        <div className="dc-window-title">
          <span>MESSAGE</span>
          <b>×</b>
        </div>
        <div className="dc-message-body">
          <span>★</span>
          <p>new memory<br />saved!!</p>
          <i>OK</i>
        </div>
      </div>

      <div className="dc-window dc-window--terminal">
        <div className="dc-window-title">
          <span>TERMINAL_01</span>
          <b>_ □ ×</b>
        </div>
        <div className="dc-terminal-body">
          <p>C:\USER\PORTFOLIO&gt; run kitchen.exe</p>
          <p>loading pastries...</p>
          <p className="dc-terminal-progress">████████░░ 80%</p>
          <span>_</span>
        </div>
      </div>

      <div className="dc-disc">
        <i />
        <span>CD-R<br />700 MB</span>
      </div>

      <div className="dc-orbit">
        <i />
        <i />
        <b>✧</b>
      </div>

      <div className="dc-pixel-chain">
        <i />
        <i />
        <i />
        <i />
        <i />
        <i />
      </div>

      <div className="dc-file-tag">
        <span>FILE_STARS.gif</span>
        <b>1024 × 768</b>
      </div>

      <div className="dc-pixel-wings">
        <div className="dc-pixel-wing dc-pixel-wing--left">
          <i /><i /><i /><i /><b />
        </div>
        <span>HEART_LINK.GIF</span>
        <div className="dc-pixel-wing dc-pixel-wing--right">
          <i /><i /><i /><i /><b />
        </div>
      </div>

      <div className="dc-ribbon">
        <i />
        <span>⋆ DREAM IN 3D ⋆</span>
        <i />
      </div>

      <pre className="dc-ascii-face">{`  .-------.
 /  o   o  \\
|     ^     |
 \\   '-'   /
  '-------'`}</pre>

      <pre className="dc-code dc-code--one">{`const brain = {
  mode: "online",
  color: "#bfe9ff",
  ideas: Too many
};`}</pre>

      <pre className="dc-code dc-code--two">{`> ping dream.net
reply: 24ms
packets: 4/4
status: connected_`}</pre>

      <div className="dc-line-field">
        <i /><i /><i /><i /><i />
      </div>

      <div className="dc-text-sigil">
        <span>◎</span>
        <p>CLICK TO RUN<br />CLICK TO REMEMBER<br />CLICK TO BEGIN</p>
      </div>
    </div>
  );
}
