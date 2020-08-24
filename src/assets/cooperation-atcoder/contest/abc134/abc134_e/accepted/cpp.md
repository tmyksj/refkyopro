# AtCoder Beginner Contest 134
## E - Sequence Decomposing
```cpp
#include <iostream>
#include <set>
#include <vector>

using namespace std;

int main() {
    int n;
    cin >> n;

    vector<int> a(n);
    for (int i = 0; i < n; i++) {
        cin >> a[i];
    }

    multiset<int> b;
    b.insert(a[n - 1]);

    for (int i = n - 2; i >= 0; i--) {
        multiset<int>::iterator ite = b.upper_bound(a[i]);
        if (ite != b.end()) {
            b.erase(ite);
        }

        b.insert(a[i]);
    }

    cout << b.size() << endl;
}
```
