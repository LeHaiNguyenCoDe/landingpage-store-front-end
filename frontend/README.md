Fork from Base
- Chỉ Fork 1 branch từ Base `base/release`
- Sau khi fork, tạo nhánh mới (dev) thì chạy lệnh
- `git reset $(git commit-tree 'HEAD^{tree}' -m "Initial commit from dev")` để reset tất cả commit từ kit về 1 commit sạch git
# Base source VUE4
- CMS: Laravel
- Frontend: VUEJS4 (VUE4)

## How to use:
- Fork from WebKit
- Clone your forked repo

Add Upstream and Fetch from Upstream
```bash
git remote -v
git pull upstream `base/release`
```

## Custom Icon:
- Export SVG icon từ design vào folder `app/icons` dạng `app/icons/file-name.svg`. VD: `app/icons/star.svg`
- Dùng class để  `i-custom-file-name` hiển thị icon. Vd : `<i class="i-custom-star text-2xl"></i> `

## Responsive font size, width, height, spacing theo min, max
- VD: `f-text-32-64` - mobile: `32px`, pc: `64px`, ở giữa khoảng này tự thay đổi
- Xem: https://renatomoor.github.io/unocss-preset-fluid/examples.html

## Rule middleware NuxtApi
- Các Api dành cho user đã đăng nhập hiện tại chưa bắt buộc phải có token, khi request endpoint đó, mà ko truyền token kèm header nhận dạng, hệ thống tự động đưa Connection bằng API
  - Đây là lỗ hồng bảo mật
- `server/middleware/auth.require.ts`: thêm các path cần apply kiểm tra user đã đăng nhập vào `pathsRequireAuth`
- api.instance.ts: sẽ kiểm tra nếu event có yêu cầu đăng nhập, mà user ko có accesstoken thì sẽ trả về lỗi `401`
```ts
    if (!userAccessToken && event.require_auth) {
        return {
            statusCode: 401,
            error: 'Unauthorized access'
        }
    }
```
