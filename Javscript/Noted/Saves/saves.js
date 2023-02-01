// sidebar 
const btn = document.querySelector("#btn")
const sidebar = document.querySelector(".sidebar")

btn.addEventListener('click', () => {
    sidebar.classList.toggle("active")
})

$('.dropdown').click(function () {
    $(this).attr('tabindex', 1).focus();
    $(this).toggleClass('active');
    $(this).find('.dropdown-menu').slideToggle(300);
});
$('.dropdown').focusout(function () {
    $(this).removeClass('active');
    $(this).find('.dropdown-menu').slideUp(300);
});
$('.dropdown .dropdown-menu li').click(function () {
    $(this).parents('.dropdown').find('span').text($(this).text());
    $(this).parents('.dropdown').find('input').attr('value', $(this).attr('id'));
});
for(i=0; i<50;  i++){
    document.querySelector('.blogs').innerHTML +=
        `
        <div class="blog">
            <div class="blogTop">
                <div class="blogTitle">Once upon a time</div>
                <div class="timeToRead">5min</div>
            </div>
            <div class="blogBottom">
                <span class="blogLeft">
                    <div class="Likes">
                        <i class='bx bxs-heart' id="likes">0</i>
                        <!--  
                        <i class=" |" id="likes"></i>
                        -->
                    </div>
                    <div class="Follows">
                        <i class='bx bxs-chevron-right-circle' id="follows"></i>
                        <!--
                                <i class='|' id="follows"></i>
                        -->
                    </div>
                    <div class="Saves">
                        <i class='bx bxs-bookmark' id="saves"></i>
                        <!-- 
                        <i class='' id="saves"></i>
                        -->
                    </div>
                </span>
                <div class="blogContent">
                    <span class="blogSubject">Story</span>
                    <div class="blogStory">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat quas dignissimos cum magnam eligendi suscipit velit possimus omnis deleniti aliquid accusantium quaerat placeat est, aliquam rerum perspiciatis eaque enim officia.</a></div>
                </div>
            </div>
        </div>
        `
}