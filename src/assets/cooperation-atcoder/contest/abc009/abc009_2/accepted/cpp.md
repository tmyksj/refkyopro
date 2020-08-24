# AtCoder Beginner Contest 009
## B - 心配性な富豪、ファミリーレストランに行く。
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

    cout << *++s.rbegin() << endl;
}
```
