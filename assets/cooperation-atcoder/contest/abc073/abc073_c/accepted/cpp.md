# AtCoder Beginner Contest 073
## C - Write and Erase
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

        if (s.find(a) == s.end()) {
            s.insert(a);
        } else {
            s.erase(a);
        }
    }

    cout << s.size() << endl;
}
```
