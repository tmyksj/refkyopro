# AtCoder Beginner Contest 019
## C - 高橋くんと魔法の箱
```cpp
#include <iostream>
#include <set>

using namespace std;

int main() {
    int n;
    cin >> n;

    set<long long> a;
    for (int i = 0; i < n; i++) {
        long long ai;
        cin >> ai;
        a.insert(ai);
    }

    int res = 0;
    for (; !a.empty(); res++) {
        for (long long i = *a.begin(); !a.empty() && i <= *a.rbegin(); i *= 2) {
            a.erase(i);
        }
    }

    cout << res << endl;
}
```
