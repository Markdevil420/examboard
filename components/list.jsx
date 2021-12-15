export default function List() {
    return (
        <ol class="list-group list-group-numbered">
        <li class="list-group-item d-flex justify-content-between align-items-start">
          <div class="ms-2 me-auto">
            <div class="fw-bold">Subheading SubheadingSubheading Subheading Subheading</div>
          </div>
          <span class="badge bg-primary my-auto p-2 rounded-pill cursorpointer">Read More&#8594;</span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-start">
          <div class="ms-2 me-auto">
            <div class="fw-bold">Subheading</div>
          </div>
          <span class="badge bg-primary my-auto p-2 rounded-pill cursorpointer">&#8594;</span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-start">
          <div class="ms-2 me-auto">
            <div class="fw-bold">Subheading</div>
          </div>
          <span class="badge bg-primary my-auto p-2 rounded-pill cursorpointer">&#8594;</span>
        </li>
      </ol>
    )
  }