# AtCoder Beginner Contest 154
## C - Distinct or Not
```cpp
#include <iostream>
#include <set>

using namespace std;

int main() {
    int n;
    cin >> n;

    set<int> s;
    for (int i = 0; i < n; i++) {
        int a;
        cin >> a;
        s.insert(a);
    }

    cout << (static_cast<int>(s.size()) == n ? "YES" : "NO") << endl;
}
```
