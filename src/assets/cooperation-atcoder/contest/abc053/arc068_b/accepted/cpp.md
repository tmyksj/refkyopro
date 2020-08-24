# AtCoder Beginner Contest 053
## D - Card Eater
```cpp
#include <iostream>
#include <set>

using namespace std;

int main() {
    int n;
    cin >> n;

    set<int> a_set;
    for (int i = 0; i < n; i++) {
        int a;
        cin >> a;
        a_set.insert(a);
    }

    cout << (a_set.size() - (a_set.size() % 2 == 0 ? 1 : 0)) << endl;
}
```
