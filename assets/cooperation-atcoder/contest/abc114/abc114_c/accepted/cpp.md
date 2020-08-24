# AtCoder Beginner Contest 114
## C - 755
```cpp
#include <iostream>

using namespace std;

int solve(long long n, long long c, int th, int fo, int fi) {
    return (10 * c + 3 <= n ? solve(n, 10 * c + 3, th + 1, fo, fi) + (fo > 0 && fi > 0 ? 1 : 0) : 0)
        + (10 * c + 5 <= n ? solve(n, 10 * c + 5, th, fo + 1, fi) + (th > 0 && fi > 0 ? 1 : 0) : 0)
        + (10 * c + 7 <= n ? solve(n, 10 * c + 7, th, fo, fi + 1) + (th > 0 && fo > 0 ? 1 : 0) : 0);
}

int main() {
    long long n;
    cin >> n;
    cout << solve(n, 0LL, 0, 0, 0) << endl;
}
```
