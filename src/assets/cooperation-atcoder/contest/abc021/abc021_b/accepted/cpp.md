# AtCoder Beginner Contest 021
## B - 嘘つきの高橋くん
```cpp
#include <iostream>
#include <set>

using namespace std;

int main() {
    int n, a, b, k;
    cin >> n >> a >> b >> k;

    set<int> s;
    s.insert(a);
    s.insert(b);

    for (int i = 0; i < k; i++) {
        int p;
        cin >> p;
        s.insert(p);
    }

    cout << (static_cast<int>(s.size()) == k + 2 ? "YES" : "NO") << endl;
}
```
